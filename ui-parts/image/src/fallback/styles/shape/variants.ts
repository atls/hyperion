import type { FallbackShape } from './interfaces.js'

import { spacing }            from '@atls-ui/theme/tokens'
import { typography }         from '@atls-ui/theme/tokens'

export const fallbackShapes = {
  default: {
    paddingInline: spacing.component.lg,
    gap: spacing.component.xs,
    typography: typography.overline,
  },
} satisfies Record<string, FallbackShape>
