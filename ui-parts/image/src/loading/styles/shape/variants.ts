import type { LoadingShape }    from './interfaces.js'

import { circleProgressShapes } from '@atls-ui-parts/progress'
export const loadingShapes = {
  default: { progress: circleProgressShapes.xs },
} satisfies Record<string, LoadingShape>
