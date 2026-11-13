import type { BoxShape } from './interfaces.js'

import { borderWidths }  from '@atls-ui/theme/tokens'
import { radii }         from '@atls-ui/theme/tokens'

import { AVATAR_SIZES }  from './constants.js'
export const boxShapes = {
  xs: {
    size: AVATAR_SIZES.xs,
    radius: radii.full,
    borderWidth: borderWidths.xs,
    elevationSize: 'xs',
  },
  sm: {
    size: AVATAR_SIZES.sm,
    radius: radii.full,
    borderWidth: borderWidths.xs,
    elevationSize: 'sm',
  },
  md: {
    size: AVATAR_SIZES.md,
    radius: radii.full,
    borderWidth: borderWidths.xs,
    elevationSize: 'md',
  },
  lg: {
    size: AVATAR_SIZES.lg,
    radius: radii.full,
    borderWidth: borderWidths.xs,
    elevationSize: 'lg',
  },
} satisfies Record<string, BoxShape>
export const boxForms = { circle: radii.full, square: radii.xs } as const
