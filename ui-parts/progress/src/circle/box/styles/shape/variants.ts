import type { BoxShape } from './interfaces.js'

import { spacing }       from '@atls-ui/theme/tokens'

import { FULL_RADIUS }   from './constants.js'

export const boxShape: BoxShape = {
  paddingInline: spacing.component.none,
  paddingBlock: spacing.component.none,
  radius: FULL_RADIUS,
}
