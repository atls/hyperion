import { GeneratedError }       from './generated.js'
import { commandFailedMessage } from '../constants.js'
import { generatedErrorCodes }  from './codes.js'

export class CommandFailedError extends GeneratedError {
  readonly args: Array<string>

  readonly command: string

  readonly exitCode: number | null

  constructor(command: string, args: Array<string>, exitCode: number | null) {
    super(
      generatedErrorCodes.commandFailed,
      `${commandFailedMessage}: ${command} ${args.join(' ')} (${exitCode})`
    )

    this.args = args
    this.command = command
    this.exitCode = exitCode
  }
}
