import { assertDesignStorybookConfig } from '../config/assert.js'
import { loadModule }                  from '../lib/module-loader/load.js'
import { writeStorybookFiles }         from '../storybook/project/files.js'
import { runStorybook }                from '../storybook/runtime/run.js'
import { parseArgv }                   from './argv.js'
import { prepareCommand }              from './constants.js'

export const runDesignStorybook = async (args: Array<string>): Promise<void> => {
  const options = parseArgv(args)
  const loadedModule = await loadModule(options.configPath)
  assertDesignStorybookConfig(loadedModule.value)

  const loadedConfig = {
    config: loadedModule.value,
    path: loadedModule.path,
  }
  const configDir = await writeStorybookFiles(loadedConfig, options)

  if (options.command === prepareCommand) {
    return
  }

  await runStorybook({
    command: options.command,
    configDir,
    outputDir: options.outputDir,
    port: options.port,
  })
}
