import type { IndicatorShape }       from './interfaces.js'

import { borderWidths }              from '@atls-ui/theme/tokens'

import { DEFAULT_INDICATOR_OVERLAP } from './constants.js'

export const indicatorShapes = {
  xs2: { overlap: DEFAULT_INDICATOR_OVERLAP, strokeWidth: borderWidths.sm },
  xs: { overlap: DEFAULT_INDICATOR_OVERLAP, strokeWidth: borderWidths.md },
  sm: { overlap: DEFAULT_INDICATOR_OVERLAP, strokeWidth: borderWidths.md },
  md: { overlap: DEFAULT_INDICATOR_OVERLAP, strokeWidth: borderWidths.lg },
  lg: { overlap: DEFAULT_INDICATOR_OVERLAP, strokeWidth: borderWidths.xl },
  xl: { overlap: DEFAULT_INDICATOR_OVERLAP, strokeWidth: borderWidths.xl2 },
} satisfies Record<string, IndicatorShape>
