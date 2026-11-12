import type { CloseShape } from './interfaces.js'

import { CLOSE_SIZES }     from './constants.js'

export const closeShapes: Record<'lg' | 'md' | 'sm', CloseShape> = {
  sm: { size: CLOSE_SIZES.sm },
  md: { size: CLOSE_SIZES.md },
  lg: { size: CLOSE_SIZES.lg },
}
