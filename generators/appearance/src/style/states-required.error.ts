import { GeneratorError } from '../generator.error.js'

export class StyleStatesRequiredError extends GeneratorError {
  constructor() {
    super('style_states_required', 'States are required')
  }
}
