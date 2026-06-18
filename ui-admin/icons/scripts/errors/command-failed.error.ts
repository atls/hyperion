import { commandFailedMessage } from '../constants.js'

export class CommandFailedError extends Error {
  constructor(command: string, args: Array<string>, exitCode: number | null) {
    super(`${commandFailedMessage}: ${command} ${args.join(' ')} (${exitCode})`)
  }
}
