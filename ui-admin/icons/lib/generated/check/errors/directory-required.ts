import { GeneratedError }      from './generated.js'
import { generatedErrorCodes } from './codes.js'

const directoryRequiredMessage = 'Directory is required'

export class DirectoryRequiredError extends GeneratedError {
  readonly path: string

  constructor(targetPath: string) {
    super({
      code: generatedErrorCodes.directoryRequired,
      message: `${directoryRequiredMessage}: ${targetPath}`,
    })

    this.path = targetPath
  }
}
