export class GeneratorModeRequiredError extends Error {
  constructor() {
    super('Exactly one of --check or --write is required')
  }
}
