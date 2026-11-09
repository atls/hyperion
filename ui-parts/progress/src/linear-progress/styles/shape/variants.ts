import type { LinearProgressShape } from './interfaces.js'

import { linearIndicatorShapes }    from '../../indicator/styles/shape/variants.js'
import { linearTrackShapes }        from '../../track/styles/shape/variants.js'

export const linearProgressShapes = {
  xs: { track: linearTrackShapes.xs, indicator: linearIndicatorShapes.xs },
  sm: { track: linearTrackShapes.sm, indicator: linearIndicatorShapes.sm },
  md: { track: linearTrackShapes.md, indicator: linearIndicatorShapes.md },
  lg: { track: linearTrackShapes.lg, indicator: linearIndicatorShapes.lg },
} satisfies Record<string, LinearProgressShape>
