import type { BoxShape } from './interfaces.js'

import { radii }         from '@atls-ui/theme/tokens'
import { spacing }       from '@atls-ui/theme/tokens'

const FULL_RADIUS = `min(${radii.full}, 50cqmin)`

export const boxShape: BoxShape = {
  paddingInline: spacing.component.none,
  paddingBlock: spacing.component.none,
  radius: FULL_RADIUS,
}
