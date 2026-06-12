import { GeneratorError } from '../generator.error.js'

export class StylePrefixRequiredError extends GeneratorError {
  constructor() {
    super('style_prefix_required', 'Prefix is required')
  }
}
