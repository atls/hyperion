import { GeneratedError }      from './generated.js'
import { generatedErrorCodes } from './codes.js'
import { fileRequiredMessage } from './messages.js'

export class FileRequiredError extends GeneratedError {
  readonly path: string

  constructor(targetPath: string) {
    super(generatedErrorCodes.fileRequired, `${fileRequiredMessage}: ${targetPath}`)

    this.path = targetPath
  }
}
