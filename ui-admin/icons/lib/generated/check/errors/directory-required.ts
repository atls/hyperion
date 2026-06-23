import { GeneratedError }           from './generated.js'
import { generatedErrorCodes }      from './codes.js'
import { directoryRequiredMessage } from './messages.js'

export class DirectoryRequiredError extends GeneratedError {
  readonly path: string

  constructor(targetPath: string) {
    super(generatedErrorCodes.directoryRequired, `${directoryRequiredMessage}: ${targetPath}`)

    this.path = targetPath
  }
}
