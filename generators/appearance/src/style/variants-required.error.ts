import { GeneratorError } from '../generator.error.js'

export class StyleVariantsRequiredError extends GeneratorError {
  constructor() {
    super('style_variants_required', 'Variants are required')
  }
}
