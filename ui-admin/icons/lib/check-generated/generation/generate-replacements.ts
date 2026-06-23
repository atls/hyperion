import { generateIconsCommand }        from '../constants.js'
import { generateReplacementsCommand } from '../constants.js'
import { iconsGeneratorWorkspace }     from '../constants.js'
import { iconsPathArgument }           from '../constants.js'
import { workspaceRootPath }           from '../constants.js'
import { workspaceArgument }           from '../constants.js'
import { yarnCommand }                 from '../constants.js'
import { runCommand }                  from '../process/run-command.js'

export const generateReplacements = async (svgPath: string, outputPath: string): Promise<void> => {
  await runCommand(
    yarnCommand,
    [
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
