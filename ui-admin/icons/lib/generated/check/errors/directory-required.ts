import { GeneratedError }           from './generated.js'
import { directoryRequiredMessage } from '../constants.js'
import { generatedErrorCodes }      from './codes.js'

export class DirectoryRequiredError extends GeneratedError {
  readonly path: string

  constructor(targetPath: string) {
    super(generatedErrorCodes.directoryRequired, `${directoryRequiredMessage}: ${targetPath}`)

    this.path = targetPath
  }
}
