import { GeneratorError } from '../generator.error.js'

export class StyleSchemaTargetPathError extends GeneratorError {
  constructor() {
    super('schema_target_path_invalid', "Path should not end with '/' character")
  }
}
