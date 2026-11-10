import type { ModalShape }      from './interfaces.js'

import { buttonShapes }         from '@atls-ui-parts/button'
import { circleProgressShapes } from '@atls-ui-parts/progress'
import { spacing }              from '@atls-ui/theme/tokens'

import { boxShapes }            from '../../box/styles/shape/variants.js'
import { closeShapes }          from '../../close/styles/shape/variants.js'

export const modalShapes: Record<'lg' | 'md' | 'sm', ModalShape> = {
  sm: {
    actions: { gap: spacing.component.md, button: buttonShapes.xs },
    loading: circleProgressShapes.md,
    box: boxShapes.sm,
    close: closeShapes.sm,
  },
  md: {
    actions: { gap: spacing.component.lg, button: buttonShapes.sm },
    loading: circleProgressShapes.lg,
    box: boxShapes.md,
    close: closeShapes.md,
  },
  lg: {
    actions: { gap: spacing.component.lg, button: buttonShapes.md },
    loading: circleProgressShapes.xl,
    box: boxShapes.lg,
    close: closeShapes.lg,
  },
}
