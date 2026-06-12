import { GeneratorError } from './generator.error.js'

export class StyleSchemaPathFileRequiredError extends GeneratorError {
  constructor() {
    super('schema_path_file_required', 'Style schema path should point to a file')
  }
}
