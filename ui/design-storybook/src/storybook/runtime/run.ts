import type { StorybookArgs }              from './interfaces.js'
import type { StorybookCommandArgsParams } from './interfaces.js'
import type { StorybookPackageJson }       from './interfaces.js'
import type { StorybookRuntimeOptions }    from './interfaces.js'

import { spawn }                           from 'node:child_process'
import { readFile }                        from 'node:fs/promises'
import { createRequire }                   from 'node:module'
import { dirname }                         from 'node:path'
import { join }                            from 'node:path'
import { resolve }                         from 'node:path'

import { configDirOption }                 from './constants.js'
import { outputDirOption }                 from './constants.js'
import { packageJsonEncoding }             from './constants.js'
import { portOption }                      from './constants.js'
import { storybookBuildCommand }           from './constants.js'
import { storybookDevCommand }             from './constants.js'
import { storybookPackageManifest }        from './constants.js'
import { storybookPackageName }            from './constants.js'
import { createStorybookFailedError }      from './errors.js'

const requireFromRuntime = createRequire(import.meta.url)

const storybookBinaryPath = async (): Promise<string> => {
  const packageJsonPath = requireFromRuntime.resolve(
    join(storybookPackageName, storybookPackageManifest)
  )
  const packageJson = JSON.parse(
    await readFile(packageJsonPath, packageJsonEncoding)
  ) as StorybookPackageJson

  return join(dirname(packageJsonPath), packageJson.bin)
}

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
  const binaryPath = await storybookBinaryPath()

  await new Promise<void>((resolvePromise, rejectPromise) => {
    const child = spawn(process.execPath, [binaryPath, ...args], {
      stdio: 'inherit',
    })

    child.on('error', rejectPromise)
    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise()

        return
      }

      rejectPromise(createStorybookFailedError(code))
    })
  })
}
