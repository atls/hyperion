import type { CircleProgressShape } from './interfaces.js'

import { boxShapes }                from '../../box/styles/shape/variants.js'
import { containerShapes }          from '../../container/styles/shape/variants.js'
import { indicatorShapes }          from '../../indicator/styles/shape/variants.js'
import { labelShapes }              from '../../label/styles/shape/variants.js'

export const circleProgressShapes = {
  xs2: {
    container: containerShapes.xs2,
    box: boxShapes.xs2,
    indicator: indicatorShapes.xs2,
    label: labelShapes.xs2,
  },
  xs: {
    container: containerShapes.xs,
    box: boxShapes.xs,
    indicator: indicatorShapes.xs,
    label: labelShapes.xs,
  },
  sm: {
    container: containerShapes.sm,
    box: boxShapes.sm,
    indicator: indicatorShapes.sm,
    label: labelShapes.sm,
  },
  md: {
    container: containerShapes.md,
    box: boxShapes.md,
    indicator: indicatorShapes.md,
    label: labelShapes.md,
  },
  lg: {
    container: containerShapes.lg,
    box: boxShapes.lg,
    indicator: indicatorShapes.lg,
    label: labelShapes.lg,
  },
  xl: {
    container: containerShapes.xl,
    box: boxShapes.xl,
    indicator: indicatorShapes.xl,
    label: labelShapes.xl,
  },
} satisfies Record<string, CircleProgressShape>
