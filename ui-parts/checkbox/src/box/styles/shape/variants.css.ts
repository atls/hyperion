import type { BoxShape } from './interfaces.js'

import { style }         from '@vanilla-extract/css'

import { spacing }       from '@atls-ui/theme'
import { borderWidths }  from '@atls-ui/theme/tokens'
import { radii }         from '@atls-ui/theme/tokens'

export const boxShapeStyles: Record<'lg' | 'md' | 'sm', BoxShape> = {
  sm: {
    className: style({
      width: '18px',
      height: '18px',
      borderRadius: radii.xs2,
      borderWidth: borderWidths.sm,
    }),
    elevationSize: 'xs',
    padding: spacing.component.none,
  },
  md: {
    className: style({
      width: '24px',
      height: '24px',
      borderRadius: radii.xs2,
      borderWidth: borderWidths.sm,
    }),
    elevationSize: 'sm',
    padding: spacing.component.none,
  },
  lg: {
    className: style({
      width: '28px',
      height: '28px',
      borderRadius: radii.xs2,
      borderWidth: borderWidths.sm,
    }),
    elevationSize: 'md',
    padding: spacing.component.none,
  },
}
