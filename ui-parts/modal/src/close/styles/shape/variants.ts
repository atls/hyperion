import type { CloseShape } from './interfaces.js'

import { iconSizes }       from '@atls-ui/theme/tokens'

export const closeShapes: Record<'lg' | 'md' | 'sm', CloseShape> = {
  sm: { size: iconSizes.sm },
  md: { size: iconSizes.md },
  lg: { size: iconSizes.lg },
}
