export class StyleSchemaTargetPathError extends Error {
  constructor() {
    super("Path should not end with '/' character")
  }
}
