import type { SelectShape } from './interfaces.js'

import { containerShapes }  from '../../container/styles/shape/variants.js'
import { indicatorShapes }  from '../../indicator/styles/shape/variants.js'
import { menuShapes }       from '../../menu/styles/shape/variants.js'
import { optionShapes }     from '../../option/styles/shape/variants.js'
import { triggerShapes }    from '../../trigger/styles/shape/variants.js'
import { valueShapes }      from '../../value/styles/shape/variants.js'
export const selectShapes: Record<'lg' | 'md' | 'sm', SelectShape> = {
  sm: {
    container: containerShapes.default,
    trigger: triggerShapes.sm,
    value: valueShapes.sm,
    indicator: indicatorShapes.sm,
    menu: menuShapes.sm,
    option: optionShapes.sm,
  },
  md: {
    container: containerShapes.default,
    trigger: triggerShapes.md,
    value: valueShapes.md,
    indicator: indicatorShapes.md,
    menu: menuShapes.md,
    option: optionShapes.md,
  },
  lg: {
    container: containerShapes.default,
    trigger: triggerShapes.lg,
    value: valueShapes.lg,
    indicator: indicatorShapes.lg,
    menu: menuShapes.lg,
    option: optionShapes.lg,
  },
}
