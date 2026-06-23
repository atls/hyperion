import type { OutdatedFile }   from './outdated-file.js'

import { readFile }            from 'node:fs/promises'
import { stat }                from 'node:fs/promises'
import { basename }            from 'node:path'

import { outdatedFileReasons } from './outdated-file.js'

const isFile = async (targetPath: string): Promise<boolean> => {
  try {
    return (await stat(targetPath)).isFile()
  } catch {
    return false
  }
}

export const isOutdatedFile = async (expectedPath: string, actualPath: string): Promise<boolean> =>
  !(await readFile(expectedPath)).equals(await readFile(actualPath))

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
