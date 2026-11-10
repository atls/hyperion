import type { BoxShape } from './interfaces.js'

import { radii }         from '@atls-ui/theme/tokens'
import { spacing }       from '@atls-ui/theme/tokens'

export const boxShapes: Record<'lg' | 'md' | 'sm', BoxShape> = {
  sm: {
    minWidth: 'min(200px, 100%)',
    borderRadius: radii.xs2,
    paddingTop: spacing.component.lg,
    paddingBottom: spacing.component.xl,
    paddingInline: spacing.component.lg,
    gap: spacing.component.lg,
  },
  md: {
    minWidth: 'min(220px, 100%)',
    borderRadius: radii.xs,
    paddingTop: spacing.component.xl,
    paddingBottom: spacing.component.xl2,
    paddingInline: spacing.component.xl,
    gap: spacing.component.lg,
  },
  lg: {
    minWidth: 'min(240px, 100%)',
    borderRadius: radii.xs,
    paddingTop: spacing.component.xl,
    paddingBottom: spacing.component.xl2,
    paddingInline: spacing.component.xl,
    gap: spacing.component.lg,
  },
}
