import type { DesignStorybookConfig }              from './interfaces.js'

import { designStorybookConfigDefaultExportError } from './constants.js'
import { designStorybookConfigStoriesError }       from './constants.js'

export function assertDesignStorybookConfig(
  value: unknown
): asserts value is DesignStorybookConfig {
  if (!value || typeof value !== 'object') {
    throw new Error(designStorybookConfigDefaultExportError)
  }

  if (!('stories' in value)) {
    throw new Error(designStorybookConfigStoriesError)
  }
}
