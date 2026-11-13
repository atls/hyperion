import type { ActionsShape } from './interfaces.js'

import { buttonShapes }      from '@atls-ui-parts/button'
import { spacing }           from '@atls-ui/theme/tokens'

export const actionsShapes: Record<'lg' | 'md' | 'sm', ActionsShape> = {
  sm: { gap: spacing.component.md, button: buttonShapes.xs },
  md: { gap: spacing.component.lg, button: buttonShapes.sm },
  lg: { gap: spacing.component.lg, button: buttonShapes.md },
}
