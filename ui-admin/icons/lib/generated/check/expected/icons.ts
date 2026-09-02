import { runCommand }               from '../command/run.js'
import { generateIconsCommand }     from '../constants.js'
import { iconsGeneratorWorkspace }  from '../constants.js'
import { iconsPathArgument }        from '../constants.js'
import { replacementsPathArgument } from '../constants.js'
import { sourceReplacementsPath }   from '../constants.js'
import { workspaceRootPath }        from '../constants.js'
import { workspaceArgument }        from '../constants.js'
import { yarnCommand }              from '../constants.js'

export const generateIcons = async (svgPath: string, outputPath: string): Promise<void> => {
  await runCommand(
    yarnCommand,
    [
      workspaceArgument,
      iconsGeneratorWorkspace,
      generateIconsCommand,
      outputPath,
      iconsPathArgument,
      svgPath,
      replacementsPathArgument,
      sourceReplacementsPath,
    ],
    { cwd: workspaceRootPath }
  )
}
