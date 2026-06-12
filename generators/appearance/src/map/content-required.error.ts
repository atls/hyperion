export class MapContentRequiredError extends Error {
  constructor() {
    super('Styles or exports are required')
  }
}
