import type { LinearProgressAnimation } from './interfaces.js'

import { animations }                   from '@atls-ui/theme/tokens'

import { DEFAULT_SEGMENT_LENGTH }       from './constants.js'

export const linearProgressAnimations = {
  indeterminate: {
    duration: `${animations.loopDuration.sm}ms`,
    easing: animations.easing.linear,
    segments: [
      {
        id: 'indeterminate',
        frames: [
          { at: 0, start: -DEFAULT_SEGMENT_LENGTH, end: 0 },
          { at: 1, start: 1, end: 1 + DEFAULT_SEGMENT_LENGTH },
        ],
      },
    ],
  },
} satisfies Record<string, LinearProgressAnimation>
