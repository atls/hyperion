import type { FileDrift }  from './file-drift.js'

import { readFile }        from 'node:fs/promises'
import { stat }            from 'node:fs/promises'
import { basename }        from 'node:path'

import { fileDriftStates } from './file-drift.js'

const isFile = async (targetPath: string): Promise<boolean> => {
  try {
    return (await stat(targetPath)).isFile()
  } catch {
    return false
  }
}

export const hasFileDrift = async (expectedPath: string, actualPath: string): Promise<boolean> =>
  !(await readFile(expectedPath)).equals(await readFile(actualPath))

export const compareFiles = async (
  expectedPath: string,
  actualPath: string
): Promise<Array<FileDrift>> => {
  const relativePath = basename(actualPath)
  const hasExpectedFile = await isFile(expectedPath)
  const hasActualFile = await isFile(actualPath)

  if (!hasExpectedFile) {
    return [
      {
        actualPath,
        state: fileDriftStates.unexpected,
        relativePath,
      },
    ]
  }

  if (!hasActualFile) {
    return [
      {
        expectedPath,
        state: fileDriftStates.missing,
        relativePath,
      },
    ]
  }

  if (await hasFileDrift(expectedPath, actualPath)) {
    return [
      {
        actualPath,
        expectedPath,
        state: fileDriftStates.different,
        relativePath,
      },
    ]
  }

  return []
}
