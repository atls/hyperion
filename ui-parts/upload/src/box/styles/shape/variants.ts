import type { BoxShape } from './interfaces.js'

import { spacing }       from '@atls-ui/theme/tokens'
import { radii }         from '@atls-ui/theme/tokens'
import { borderWidths }  from '@atls-ui/theme/tokens'
export const boxShapes = {
  default: {
    padding: spacing.component.lg,
    gap: spacing.component.xs,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.sm,
    borderStyle: 'dashed',
  },
} satisfies Record<string, BoxShape>
