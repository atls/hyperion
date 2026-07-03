import type { StorybookArgs }              from './interfaces.js'
import type { StorybookCommandArgsParams } from './interfaces.js'
import type { StorybookRuntimeOptions }    from './interfaces.js'

import { spawn }                           from 'node:child_process'
import { resolve }                         from 'node:path'

import { configDirOption }                 from './constants.js'
import { outputDirOption }                 from './constants.js'
import { portOption }                      from './constants.js'
import { storybookBuildCommand }           from './constants.js'
import { storybookBinary }                 from './constants.js'
import { storybookDevCommand }             from './constants.js'
import { unknownExitCode }                 from './constants.js'
import { yarnBinary }                      from './constants.js'

const storybookCommandArgs = ({
  command,
  configDir,
  outputDir,
  port,
}: StorybookCommandArgsParams): StorybookArgs =>
  command === storybookBuildCommand
    ? [
        storybookBuildCommand,
        configDirOption,
        configDir,
        outputDirOption,
        resolve(process.cwd(), outputDir),
      ]
    : [storybookDevCommand, configDirOption, configDir, portOption, port]

export const runStorybook = async (options: StorybookRuntimeOptions): Promise<void> => {
  const args = storybookCommandArgs({
    command: options.command,
    configDir: options.configDir,
    outputDir: options.outputDir,
    port: options.port,
  })

  await new Promise<void>((resolvePromise, rejectPromise) => {
    const child = spawn(yarnBinary, [storybookBinary, ...args], {
      stdio: 'inherit',
    })

    child.on('error', rejectPromise)
    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise()

        return
      }

      rejectPromise(new Error(`storybook_failed:${code ?? unknownExitCode}`))
    })
  })
}
