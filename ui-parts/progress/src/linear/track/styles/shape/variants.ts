import type { TrackShape }     from './interfaces.js'

import { borderWidths }        from '@atls-ui/theme/tokens'
import { radii }               from '@atls-ui/theme/tokens'

import { DEFAULT_TRACK_WIDTH } from './constants.js'
import { LARGE_TRACK_HEIGHT }  from './constants.js'

export const linearTrackShapes = {
  xs: { width: DEFAULT_TRACK_WIDTH, height: borderWidths.md, borderRadius: radii.full },
  sm: { width: DEFAULT_TRACK_WIDTH, height: borderWidths.xl, borderRadius: radii.full },
  md: { width: DEFAULT_TRACK_WIDTH, height: borderWidths.xl2, borderRadius: radii.full },
  lg: { width: DEFAULT_TRACK_WIDTH, height: LARGE_TRACK_HEIGHT, borderRadius: radii.full },
} satisfies Record<string, TrackShape>
