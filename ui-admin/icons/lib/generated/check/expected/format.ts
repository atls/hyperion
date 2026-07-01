import { readdir }               from 'node:fs/promises'
import { join }                  from 'node:path'
import { relative }              from 'node:path'
import { sep }                   from 'node:path'

import { runCommand }            from '../command/run.js'
import { formatCommand }         from '../constants.js'
import { relativePathSeparator } from '../constants.js'
import { workspaceRootPath }     from '../constants.js'
import { yarnCommand }           from '../constants.js'

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

export const formatFiles = async (iconsPath: string, replacementsPath: string): Promise<void> => {
  const filePaths = [
    replacementsPath,
    ...(await collectFiles(iconsPath)).map((filePath) => join(iconsPath, filePath)),
  ]
  const relativeFilePaths = filePaths.map((filePath) => relative(workspaceRootPath, filePath))

  await runCommand(yarnCommand, [formatCommand, ...relativeFilePaths], { cwd: workspaceRootPath })
}
