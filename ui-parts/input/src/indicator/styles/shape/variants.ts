import type { InputIndicatorShape } from './interfaces.js'

import { iconSizes }                from '@atls-ui/theme'
export const inputIndicatorShapes: Record<'lg' | 'md' | 'sm', InputIndicatorShape> = {
  sm: { size: iconSizes.sm },
  md: { size: iconSizes.md },
  lg: { size: iconSizes.lg },
}
