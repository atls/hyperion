import { relative }          from 'node:path'

import { runCommand }        from '../command/run.js'
import { formatCommand }     from '../constants.js'
import { workspaceRootPath } from '../constants.js'
import { yarnCommand }       from '../constants.js'

export const formatFiles = async (filePaths: Array<string>): Promise<void> => {
  const relativeFilePaths = filePaths.map((filePath) => relative(workspaceRootPath, filePath))

  await runCommand(yarnCommand, [formatCommand, ...relativeFilePaths], { cwd: workspaceRootPath })
}
