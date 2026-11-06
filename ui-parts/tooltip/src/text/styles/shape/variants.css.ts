import type { TextShape } from './interfaces.js'

import { typography }     from '@atls-ui/theme/tokens'

export const textShapes: Record<'default', TextShape> = {
  default: { typography: typography.body.lg },
}
