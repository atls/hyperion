import type { LoadingShape }    from './interfaces.js'

import { circleProgressShapes } from '@atls-ui-parts/progress'
export const loadingShapes = {
  xs: { progress: circleProgressShapes.xs2 },
  sm: { progress: circleProgressShapes.xs2 },
  md: { progress: circleProgressShapes.xs },
  lg: { progress: circleProgressShapes.sm },
} satisfies Record<string, LoadingShape>
