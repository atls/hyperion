import type { CliOptions }             from './interfaces.js'
import type { DesignStorybookCommand } from './interfaces.js'

import { storybookBuildCommand }       from '../storybook/runtime/constants.js'
import { storybookDevCommand }         from '../storybook/runtime/constants.js'

export const buildCommand = storybookBuildCommand
export const devCommand = storybookDevCommand
export const prepareCommand = 'prepare'

export const designStorybookCommands: Array<DesignStorybookCommand> = [
  buildCommand,
  devCommand,
  prepareCommand,
]

export const cliOptionNames = {
  configDir: '--config-dir',
  configPath: '--config',
  outputDir: '--output-dir',
  port: '--port',
}

export const defaultCliOptions: CliOptions = {
  command: devCommand,
  configDir: '.hyperion/design-storybook',
  configPath: 'design.storybook.config.mjs',
  outputDir: 'dist',
  port: '6006',
}
