import type { CloseShape } from './interfaces.js'

import { spacing }         from '@atls-ui/theme/tokens'

export const closeShapes: Record<'lg' | 'md' | 'sm', CloseShape> = {
  sm: { size: spacing.component.xl },
  md: { size: spacing.component.xl2 },
  lg: { size: spacing.component.xl3 },
}
