import type { OutdatedFile }   from '../interfaces.js'

import { basename }            from 'node:path'

import { outdatedFileReasons } from '../constants.js'
import { isFile }              from '../filesystem/is-file.js'
import { isOutdatedFile }      from '../filesystem/is-outdated-file.js'

export const compareFiles = async (
  expectedPath: string,
  actualPath: string
): Promise<Array<OutdatedFile>> => {
  const relativePath = basename(actualPath)
  const hasExpectedFile = await isFile(expectedPath)
  const hasActualFile = await isFile(actualPath)

  if (!hasExpectedFile) {
    return [
      {
        actualPath,
        reason: outdatedFileReasons.unexpected,
        relativePath,
      },
    ]
  }

  if (!hasActualFile) {
    return [
      {
        expectedPath,
        reason: outdatedFileReasons.missing,
        relativePath,
      },
    ]
  }

  if (await isOutdatedFile(expectedPath, actualPath)) {
    return [
      {
        actualPath,
        expectedPath,
        reason: outdatedFileReasons.different,
        relativePath,
      },
    ]
  }

  return []
}
