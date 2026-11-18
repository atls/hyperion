import type { BoxShape } from './interfaces.js'

import { radii }         from '@atls-ui/theme/tokens'
import { spacing }       from '@atls-ui/theme/tokens'

export const boxShape: BoxShape = {
  paddingInline: spacing.component.none,
  paddingBlock: spacing.component.none,
  radius: radii.full,
}
