import type { Theme }    from '@atls-ui/theme'

import { shadowOffsets } from '@atls-ui/theme/tokens'
import { shadowBlurs }   from '@atls-ui/theme/tokens'
import { shadowSpreads } from '@atls-ui/theme/tokens'

export const progressShadow = (theme: Theme): string =>
  [
    `${shadowOffsets.none} ${shadowOffsets.none} ${shadowBlurs.xs6} ${shadowSpreads.xs2} ${theme.colors.action.subtle}`,
    `${shadowOffsets.none} ${shadowOffsets.none} ${shadowBlurs.xs7} ${shadowSpreads.xs3} ${theme.colors.elevation.sm}`,
  ].join(', ')
