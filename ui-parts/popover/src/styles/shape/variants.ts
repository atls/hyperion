import type { PopoverShape } from './interfaces.js'

import { arrowShapes }       from '../../arrow/styles/shape/variants.js'
import { boxShapes }         from '../../box/styles/shape/variants.js'
import { containerShapes }   from '../../container/styles/shape/variants.js'

export const popoverShapes: Record<'default', PopoverShape> = {
  default: {
    container: containerShapes.default,
    box: boxShapes.default,
    arrow: arrowShapes.default,
  },
}
