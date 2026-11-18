import type { ArrowShape }      from './interfaces.js'

import { DEFAULT_ARROW_HEIGHT } from './constants.js'
import { DEFAULT_ARROW_WIDTH }  from './constants.js'

export const arrowShapes: Record<'default', ArrowShape> = {
  default: { width: DEFAULT_ARROW_WIDTH, height: DEFAULT_ARROW_HEIGHT },
}
