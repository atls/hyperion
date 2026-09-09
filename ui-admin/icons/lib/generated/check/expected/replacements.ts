import { runCommand }                  from '../command/run.js'
import { generateIconsCommand }        from '../constants.js'
import { generateReplacementsCommand } from '../constants.js'
import { iconsGeneratorWorkspace }     from '../constants.js'
import { iconsPathArgument }           from '../constants.js'
import { nodeExecutablePath }          from '../constants.js'
import { workspaceRootPath }           from '../constants.js'
import { workspaceArgument }           from '../constants.js'
import { yarnCliPath }                 from '../constants.js'

export const generateReplacements = async (svgPath: string, outputPath: string): Promise<void> => {
  await runCommand(
    nodeExecutablePath,
    [
      yarnCliPath,
      workspaceArgument,
      iconsGeneratorWorkspace,
      generateIconsCommand,
      generateReplacementsCommand,
      outputPath,
      iconsPathArgument,
      svgPath,
    ],
    { cwd: workspaceRootPath }
  )
}
