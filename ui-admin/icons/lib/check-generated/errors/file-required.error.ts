import { fileRequiredMessage } from '../constants.js'

export class FileRequiredError extends Error {
  constructor(targetPath: string) {
    super(`${fileRequiredMessage}: ${targetPath}`)
  }
}
