import type { OptionShape } from './interfaces.js'

import { borderWidths }     from '@atls-ui/theme'
import { spacing }          from '@atls-ui/theme'
import { typography }       from '@atls-ui/theme'
export const optionShapes: Record<'lg' | 'md' | 'sm', OptionShape> = {
  sm: {
    paddingInline: spacing.component.sm,
    paddingBlock: spacing.component.sm,
    gap: spacing.component.xs,
    borderWidth: borderWidths.xs,
    typography: typography.overline,
  },
  md: {
    paddingInline: spacing.component.lg,
    paddingBlock: spacing.component.sm,
    gap: spacing.component.md,
    borderWidth: borderWidths.xs,
    typography: typography.label.sm,
  },
  lg: {
    paddingInline: spacing.component.xl,
    paddingBlock: spacing.component.md,
    gap: spacing.component.lg,
    borderWidth: borderWidths.xs,
    typography: typography.label.md,
  },
}
