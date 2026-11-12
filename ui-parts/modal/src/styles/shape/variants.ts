import type { ModalShape }      from './interfaces.js'

import { circleProgressShapes } from '@atls-ui-parts/progress'

import { actionsShapes }        from '../../actions/styles/shape/variants.js'
import { boxShapes }            from '../../box/styles/shape/variants.js'
import { closeShapes }          from '../../close/styles/shape/variants.js'
import { containerShapes }      from '../../container/styles/shape/variants.js'

export const modalShapes: Record<'lg' | 'md' | 'sm', ModalShape> = {
  sm: {
    container: containerShapes.default,
    actions: actionsShapes.sm,
    loading: circleProgressShapes.md,
    box: boxShapes.sm,
    close: closeShapes.sm,
  },
  md: {
    container: containerShapes.default,
    actions: actionsShapes.md,
    loading: circleProgressShapes.lg,
    box: boxShapes.md,
    close: closeShapes.md,
  },
  lg: {
    container: containerShapes.default,
    actions: actionsShapes.lg,
    loading: circleProgressShapes.xl,
    box: boxShapes.lg,
    close: closeShapes.lg,
  },
}
