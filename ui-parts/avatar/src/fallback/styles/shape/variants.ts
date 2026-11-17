import type { FallbackShape } from './interfaces.js'

import { typography }         from '@atls-ui/theme/tokens'
export const fallbackShapes = {
  xs: { typography: typography.display.sm },
  sm: { typography: typography.display.md },
  md: { typography: typography.display.md },
  lg: { typography: typography.display.lg },
} satisfies Record<string, FallbackShape>
