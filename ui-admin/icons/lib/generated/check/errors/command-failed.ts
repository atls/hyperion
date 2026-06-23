import { GeneratedError }      from './generated.js'
import { generatedErrorCodes } from './codes.js'

const commandFailedMessage = 'Command failed'

export class CommandFailedError extends GeneratedError {
  readonly args: Array<string>

  readonly command: string

  readonly exitCode: number | null

  constructor(command: string, args: Array<string>, exitCode: number | null) {
    super({
      code: generatedErrorCodes.commandFailed,
      message: `${commandFailedMessage}: ${command} ${args.join(' ')} (${exitCode})`,
    })

    this.args = args
    this.command = command
    this.exitCode = exitCode
  }
}
