import type { BoxShape } from './interfaces.js'

import { radii }         from '@atls-ui/theme/tokens'
import { spacing }       from '@atls-ui/theme/tokens'

export const boxShapes = {
  xs2: {
    paddingInline: spacing.component.none,
    paddingBlock: spacing.component.none,
    radius: radii.full,
  },
  xs: {
    paddingInline: spacing.component.none,
    paddingBlock: spacing.component.none,
    radius: radii.full,
  },
  sm: {
    paddingInline: spacing.component.none,
    paddingBlock: spacing.component.none,
    radius: radii.full,
  },
  md: {
    paddingInline: spacing.component.none,
    paddingBlock: spacing.component.none,
    radius: radii.full,
  },
  lg: {
    paddingInline: spacing.component.none,
    paddingBlock: spacing.component.none,
    radius: radii.full,
  },
  xl: {
    paddingInline: spacing.component.none,
    paddingBlock: spacing.component.none,
    radius: radii.full,
  },
} satisfies Record<string, BoxShape>
