import type { IndicatorShape } from './interfaces.js'

import { iconSizes }           from '@atls-ui/theme'
export const indicatorShapes: Record<'lg' | 'md' | 'sm', IndicatorShape> = {
  sm: { size: iconSizes.sm },
  md: { size: iconSizes.md },
  lg: { size: iconSizes.lg },
}
