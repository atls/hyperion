import { GeneratedError }      from './generated.js'
import { generatedErrorCodes } from './codes.js'

const fileRequiredMessage = 'File is required'

export class FileRequiredError extends GeneratedError {
  readonly path: string

  constructor(targetPath: string) {
    super({
      code: generatedErrorCodes.fileRequired,
      message: `${fileRequiredMessage}: ${targetPath}`,
    })

    this.path = targetPath
  }
}
