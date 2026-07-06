import type { DesignStorybookConfig }                 from './interfaces.js'

import { designStorybookConfigDefaultExportError }    from './errors.js'
import { designStorybookConfigImportSpecifierError }  from './errors.js'
import { designStorybookConfigMatrixComponentsError } from './errors.js'
import { designStorybookConfigMatrixError }           from './errors.js'
import { designStorybookConfigMatrixItemError }       from './errors.js'
import { designStorybookConfigStoriesError }          from './errors.js'
import { designStorybookConfigStoriesValueError }     from './errors.js'
import { designStorybookConfigStyleEntrypointsError } from './errors.js'
import { isImportSpecifier }                          from './guards.js'
import { isRecord }                                   from './guards.js'
import { isStories }                                  from './guards.js'
import { isStringArray }                              from './guards.js'

const assertImportSpecifier = (value: unknown): void => {
  if (!isImportSpecifier(value)) {
    throw new Error(designStorybookConfigImportSpecifierError)
  }
}

const assertMatrixItem = (value: unknown): void => {
  if (!isRecord(value) || typeof value.name !== 'string') {
    throw new Error(designStorybookConfigMatrixItemError)
  }

  assertImportSpecifier(value.component)
  assertImportSpecifier(value.variants)
}

const assertMatrixConfig = (value: unknown): void => {
  if (value === undefined) {
    return
  }

  if (!isRecord(value)) {
    throw new Error(designStorybookConfigMatrixError)
  }

  if (!Array.isArray(value.components)) {
    throw new Error(designStorybookConfigMatrixComponentsError)
  }

  value.components.forEach(assertMatrixItem)

  if (value.title !== undefined && typeof value.title !== 'string') {
    throw new Error(designStorybookConfigMatrixError)
  }
}

export function assertDesignStorybookConfig(
  value: unknown
): asserts value is DesignStorybookConfig {
  if (!isRecord(value)) {
    throw new Error(designStorybookConfigDefaultExportError)
  }

  if (!('stories' in value)) {
    throw new Error(designStorybookConfigStoriesError)
  }

  if (!isStories(value.stories)) {
    throw new Error(designStorybookConfigStoriesValueError)
  }

  if (value.styleEntrypoints !== undefined && !isStringArray(value.styleEntrypoints)) {
    throw new Error(designStorybookConfigStyleEntrypointsError)
  }

  assertMatrixConfig(value.matrix)
}
