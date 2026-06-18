import { relative }          from 'node:path'

import { formatCommand }     from '../constants.js'
import { workspaceRootPath } from '../constants.js'
import { yarnCommand }       from '../constants.js'
import { runCommand }        from './run-command.js'

export const formatFiles = async (filePaths: Array<string>): Promise<void> => {
  const relativeFilePaths = filePaths.map((filePath) => relative(workspaceRootPath, filePath))

  await runCommand(yarnCommand, [formatCommand, ...relativeFilePaths], { cwd: workspaceRootPath })
}
