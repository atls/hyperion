import type { GeneratedErrorCode } from './codes.js'

export class GeneratedError extends Error {
  readonly code: GeneratedErrorCode

  constructor(code: GeneratedErrorCode, message: string) {
    super(message)

    this.code = code
    this.name = new.target.name
  }
}
