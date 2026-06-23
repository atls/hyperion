import { directoryRequiredMessage } from '../constants.js'

export class DirectoryRequiredError extends Error {
  constructor(targetPath: string) {
    super(`${directoryRequiredMessage}: ${targetPath}`)
  }
}
