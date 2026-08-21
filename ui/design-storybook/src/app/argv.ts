import type { CliOptions }             from './interfaces.js'
import type { DesignStorybookCommand } from './interfaces.js'

import { cliOptionNames }              from './constants.js'
import { defaultCliOptions }           from './constants.js'
import { designStorybookCommands }     from './constants.js'

const getOptionValue = (args: Array<string>, name: string, fallback: string): string => {
  const index = args.indexOf(name)

  if (index === -1) {
    return fallback
  }

  return args[index + 1] ?? fallback
}

export const parseArgv = (args: Array<string>): CliOptions => {
  const command = designStorybookCommands.includes(args[0] as DesignStorybookCommand)
    ? (args[0] as DesignStorybookCommand)
    : defaultCliOptions.command

  return {
    command,
    configDir: getOptionValue(args, cliOptionNames.configDir, defaultCliOptions.configDir),
    configPath: getOptionValue(args, cliOptionNames.configPath, defaultCliOptions.configPath),
    outputDir: getOptionValue(args, cliOptionNames.outputDir, defaultCliOptions.outputDir),
    port: getOptionValue(args, cliOptionNames.port, defaultCliOptions.port),
  }
}
