export class StyleSchemaFileOutdatedError extends Error {
  constructor(filePath: string) {
    super(`${filePath} is out of date`)
  }
}
