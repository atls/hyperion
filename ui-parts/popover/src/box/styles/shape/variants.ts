import type { BoxShape } from './interfaces.js'

import { radii }         from '@atls-ui/theme/tokens'
import { spacing }       from '@atls-ui/theme/tokens'

export const boxShapes: Record<'default', BoxShape> = {
  default: {
    borderRadius: radii.xs2,
    maxWidth: 'none',
    paddingBlock: spacing.component.xs,
    paddingInline: spacing.component.md,
  },
}
