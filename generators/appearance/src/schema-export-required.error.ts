import { GeneratorError } from './generator.error.js'

export class StyleSchemaExportRequiredError extends GeneratorError {
  constructor() {
    super('schema_export_required', 'Style schema file should export schema')
  }
}
