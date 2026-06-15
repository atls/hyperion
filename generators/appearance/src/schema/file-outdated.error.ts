import { GeneratorError } from '../generator.error.js'

export class StyleSchemaFileOutdatedError extends GeneratorError {
  constructor(filePath: string) {
    super('schema_file_outdated', `${filePath} is out of date`)
  }
}
