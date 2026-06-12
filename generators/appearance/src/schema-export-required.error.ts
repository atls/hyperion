export class StyleSchemaExportRequiredError extends Error {
  constructor() {
    super('Style schema file should export schema')
  }
}
