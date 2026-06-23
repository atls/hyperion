import type { CommandOptions } from './options.js'

import { spawn }               from 'node:child_process'

import { CommandFailedError }  from '../errors/command-failed.js'

export const runCommand = async (
  command: string,
  args: Array<string>,
  options: CommandOptions = {}
): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    const childProcess = spawn(command, args, { cwd: options.cwd, stdio: 'inherit' })

    childProcess.on('error', reject)

    childProcess.on('close', (exitCode) => {
      if (exitCode === 0) {
        resolve()

        return
      }

      reject(new CommandFailedError(command, args, exitCode))
    })
  })
}
