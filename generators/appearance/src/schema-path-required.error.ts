import { GeneratorError } from './generator.error.js'

export class StyleSchemaPathRequiredError extends GeneratorError {
  constructor() {
    super('schema_path_required', 'Path to style schema is required')
  }
}
