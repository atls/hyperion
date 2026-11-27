import type { ItemShape }       from './interfaces.js'

import { radii }                from '@atls-ui/theme/tokens'
import { borderWidths }         from '@atls-ui/theme/tokens'

import { ITEM_WIDTH }           from './constants.js'
import { ITEM_HEIGHT }          from './constants.js'
import { ITEM_HIT_AREA_HEIGHT } from './constants.js'

export const itemShapes = {
  default: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: radii.xs2,
    borderWidth: borderWidths.xs,
    hitAreaHeight: ITEM_HIT_AREA_HEIGHT,
  },
} satisfies Record<string, ItemShape>
