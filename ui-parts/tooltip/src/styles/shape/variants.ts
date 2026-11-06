import type { TooltipShape } from './interfaces.js'

import { arrowShapes }       from '../../arrow/styles/shape/variants.js'
import { boxShapes }         from '../../box/styles/shape/variants.js'
import { containerShapes }   from '../../container/styles/shape/variants.js'
import { textShapes }        from '../../text/styles/shape/variants.css.js'

export const tooltipShapes: Record<'default', TooltipShape> = {
  default: {
    container: containerShapes.default,
    box: boxShapes.default,
    text: textShapes.default,
    arrow: arrowShapes.default,
  },
}
