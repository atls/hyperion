import type { BoxShape }  from './interfaces.js'

import { radii }          from '@atls-ui/theme/tokens'
import { spacing }        from '@atls-ui/theme/tokens'

import { BOX_MIN_WIDTHS } from './constants.js'

export const boxShapes: Record<'lg' | 'md' | 'sm', BoxShape> = {
  sm: {
    minWidth: `min(${BOX_MIN_WIDTHS.sm}px, 100%)`,
    borderRadius: radii.xs2,
    paddingTop: spacing.component.lg,
    paddingBottom: spacing.component.xl,
    paddingInline: spacing.component.lg,
  },
  md: {
    minWidth: `min(${BOX_MIN_WIDTHS.md}px, 100%)`,
    borderRadius: radii.xs,
    paddingTop: spacing.component.xl,
    paddingBottom: spacing.component.xl2,
    paddingInline: spacing.component.xl,
  },
  lg: {
    minWidth: `min(${BOX_MIN_WIDTHS.lg}px, 100%)`,
    borderRadius: radii.xs,
    paddingTop: spacing.component.xl,
    paddingBottom: spacing.component.xl2,
    paddingInline: spacing.component.xl,
  },
}
