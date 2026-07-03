import { dirname }                          from 'node:path'
import { isAbsolute }                       from 'node:path'
import { relative }                         from 'node:path'
import { resolve }                          from 'node:path'

import { currentDirectorySpecifier }        from '../constants.js'
import { parentDirectorySpecifier }         from '../constants.js'
import { posixPathSeparator }               from '../constants.js'
import { relativeDirectorySpecifierPrefix } from '../constants.js'
import { windowsPathSeparator }             from '../constants.js'

const isPathSpecifier = (value: string): boolean =>
  value.startsWith(currentDirectorySpecifier) ||
  value.startsWith(posixPathSeparator) ||
  value.startsWith(parentDirectorySpecifier)

const normalizeRelativeSpecifier = (value: string): string => {
  const normalized = value.replaceAll(windowsPathSeparator, posixPathSeparator)

  return normalized.startsWith(currentDirectorySpecifier)
    ? normalized
    : `${relativeDirectorySpecifierPrefix}${normalized}`
}

export const toModuleSpecifier = (value: string, fromFile: string): string => {
  if (!isPathSpecifier(value)) {
    return value
  }

  const absolutePath = isAbsolute(value) ? value : resolve(process.cwd(), value)
  const relativePath = relative(dirname(fromFile), absolutePath)

  return normalizeRelativeSpecifier(relativePath)
}
