import { GeneratorError } from '../generator.error.js'

export class MapImportsRequiredError extends GeneratorError {
  constructor() {
    super('map_imports_required', 'Imports are required')
  }
}
