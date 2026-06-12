import { GeneratorError } from './generator.error.js'

export class GeneratorModeRequiredError extends GeneratorError {
  constructor() {
    super('generator_mode_required', 'Exactly one of --check or --write is required')
  }
}
