import type { DirectoryComparisonOptions } from '../interfaces.js'
import type { OutdatedFile }               from '../interfaces.js'

import { readdir }                         from 'node:fs/promises'
import { join }                            from 'node:path'
import { sep }                             from 'node:path'

import { outdatedFileReasons }             from '../constants.js'
import { relativePathSeparator }           from '../constants.js'
import { isOutdatedFile }                  from './file.js'

const collectFiles = async (directoryPath: string, currentPath = ''): Promise<Array<string>> => {
  const entries = await readdir(join(directoryPath, currentPath), { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = currentPath ? join(currentPath, entry.name) : entry.name

      if (entry.isDirectory()) {
        return collectFiles(directoryPath, entryPath)
      }

      if (entry.isFile()) {
        return [entryPath.split(sep).join(relativePathSeparator)]
      }

      return []
    })
  )

  return files.flat().sort((pathA, pathB) => pathA.localeCompare(pathB))
}

export const compareDirectories = async ({
  actualPath,
  expectedPath,
}: DirectoryComparisonOptions): Promise<Array<OutdatedFile>> => {
  const expectedFiles = new Set(await collectFiles(expectedPath))
  const actualFiles = new Set(await collectFiles(actualPath))
  const relativePaths = [...new Set([...expectedFiles, ...actualFiles])].sort((pathA, pathB) =>
    pathA.localeCompare(pathB))

  const outdatedFiles = await Promise.all(
    relativePaths.map(async (relativePath) => {
      const expectedFilePath = join(expectedPath, relativePath)
      const actualFilePath = join(actualPath, relativePath)

      if (!expectedFiles.has(relativePath)) {
        return [
          {
            actualPath: actualFilePath,
            reason: outdatedFileReasons.unexpected,
            relativePath,
          },
        ]
      }

      if (!actualFiles.has(relativePath)) {
        return [
          {
            expectedPath: expectedFilePath,
            reason: outdatedFileReasons.missing,
            relativePath,
          },
        ]
      }

      if (await isOutdatedFile(expectedFilePath, actualFilePath)) {
        return [
          {
            actualPath: actualFilePath,
            expectedPath: expectedFilePath,
            reason: outdatedFileReasons.different,
            relativePath,
          },
        ]
      }

      return []
    })
  )

  return outdatedFiles.flat()
}
