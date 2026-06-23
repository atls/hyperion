import { readdir }               from 'node:fs/promises'
import { join }                  from 'node:path'
import { relative }              from 'node:path'
import { sep }                   from 'node:path'

import { relativePathSeparator } from '../constants.js'

const toRelativePath = (rootPath: string, filePath: string): string =>
  relative(rootPath, filePath).split(sep).join(relativePathSeparator)

const collectDirectoryFiles = async (
  rootPath: string,
  directoryPath: string
): Promise<Array<string>> => {
  const entries = (await readdir(directoryPath, { withFileTypes: true })).sort((entryA, entryB) =>
    entryA.name.localeCompare(entryB.name))

  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = join(directoryPath, entry.name)

      if (entry.isDirectory()) {
        return collectDirectoryFiles(rootPath, entryPath)
      }

      if (entry.isFile()) {
        return [toRelativePath(rootPath, entryPath)]
      }

      return []
    })
  )

  return files.flat()
}

export const collectFiles = async (rootPath: string): Promise<Array<string>> =>
  (await collectDirectoryFiles(rootPath, rootPath)).sort((fileA, fileB) =>
    fileA.localeCompare(fileB))
