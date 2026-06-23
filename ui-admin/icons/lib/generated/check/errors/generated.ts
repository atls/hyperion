import type { GeneratedErrorCode } from './codes.js'

interface GeneratedErrorOptions {
  code: GeneratedErrorCode
  message: string
}

export class GeneratedError extends Error {
  readonly code: GeneratedErrorCode

  constructor({ code, message }: GeneratedErrorOptions) {
    super(message)

    this.code = code
    this.name = new.target.name
  }
}
