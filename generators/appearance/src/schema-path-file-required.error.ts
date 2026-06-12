export class StyleSchemaPathFileRequiredError extends Error {
  constructor() {
    super('Style schema path should point to a file')
  }
}
