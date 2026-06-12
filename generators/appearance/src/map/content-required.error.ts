import { GeneratorError } from '../generator.error.js'

export class MapContentRequiredError extends GeneratorError {
  constructor() {
    super('map_content_required', 'Styles or exports are required')
  }
}
