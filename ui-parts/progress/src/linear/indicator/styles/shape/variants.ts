import type { IndicatorShape } from './interfaces.js'

import { borderWidths }        from '@atls-ui/theme/tokens'
import { radii }               from '@atls-ui/theme/tokens'

import { LARGE_TRACK_HEIGHT }  from '../../../track/styles/shape/constants.js'

export const linearIndicatorShapes = {
  xs: {
    height: borderWidths.md,
    borderRadius: radii.full,
  },
  sm: {
    height: borderWidths.xl,
    borderRadius: radii.full,
  },
  md: {
    height: borderWidths.xl2,
    borderRadius: radii.full,
  },
  lg: {
    height: LARGE_TRACK_HEIGHT,
    borderRadius: radii.full,
  },
} satisfies Record<string, IndicatorShape>
