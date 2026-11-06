import type { BoxShape }     from './interfaces.js'

import { radii }             from '@atls-ui/theme/tokens'
import { spacing }           from '@atls-ui/theme/tokens'

import { DEFAULT_MAX_WIDTH } from './constants.js'

export const boxShapes: Record<'default', BoxShape> = {
  default: {
    borderRadius: radii.xs2,
    maxWidth: DEFAULT_MAX_WIDTH,
    paddingBlock: spacing.component.xs,
    paddingInline: spacing.component.md,
  },
}
