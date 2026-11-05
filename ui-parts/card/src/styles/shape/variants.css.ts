import type { CardShape } from './interfaces.js'

import { style }          from '@vanilla-extract/css'

import { borderWidths }   from '@atls-ui/theme/tokens'
import { radii }          from '@atls-ui/theme/tokens'
import { spacing }        from '@atls-ui/theme/tokens'

export const cardShapes: Record<'lg' | 'md' | 'sm', CardShape> = {
  sm: {
    className: style({
      borderRadius: radii.xs,
      borderWidth: borderWidths.xs,
      paddingBlock: spacing.component.sm,
      paddingInline: spacing.component.sm,
    }),
    elevationSize: 'sm',
  },
  md: {
    className: style({
      borderRadius: radii.xs,
      borderWidth: borderWidths.sm,
      paddingBlock: spacing.component.lg,
      paddingInline: spacing.component.md,
    }),
    elevationSize: 'md',
  },
  lg: {
    className: style({
      borderRadius: radii.sm,
      borderWidth: borderWidths.md,
      paddingBlock: spacing.component.xl,
      paddingInline: spacing.component.lg,
    }),
    elevationSize: 'lg',
  },
}
