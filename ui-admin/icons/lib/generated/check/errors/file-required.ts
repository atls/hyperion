import { GeneratedError }      from './generated.js'
import { fileRequiredMessage } from '../constants.js'
import { generatedErrorCodes } from './codes.js'

export class FileRequiredError extends GeneratedError {
  readonly path: string

  constructor(targetPath: string) {
    super(generatedErrorCodes.fileRequired, `${fileRequiredMessage}: ${targetPath}`)

    this.path = targetPath
  }
}
