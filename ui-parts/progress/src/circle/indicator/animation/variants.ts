import type { CircleProgressAnimation } from './interfaces.js'

import { animations }                   from '@atls-ui/theme/tokens'

import { SPINNER_ARC_LENGTH }           from './constants.js'
import { ORBIT_ARC_LENGTH }             from './constants.js'
import { ORBIT_JOIN_PHASE }             from './constants.js'
import { ORBIT_JOIN_TRAVEL }            from './constants.js'

export const circleProgressAnimations = {
  spinner: {
    duration: `${animations.loopDuration.sm}ms`,
    easing: animations.easing.linear,
    segments: [
      {
        frames: [
          { at: 0, start: 0, end: SPINNER_ARC_LENGTH },
          { at: 1, start: 1, end: 1 + SPINNER_ARC_LENGTH },
        ],
      },
    ],
  },
  orbit: {
    duration: `${animations.loopDuration.md}ms`,
    easing: `cubic-bezier(${animations.curves.smooth.join(', ')})`,
    segments: [
      {
        frames: [
          { at: 0, start: 1 - ORBIT_ARC_LENGTH, end: 1 },
          {
            at: ORBIT_JOIN_PHASE,
            start: 1 + ORBIT_JOIN_TRAVEL - ORBIT_ARC_LENGTH,
            end: 1 + ORBIT_JOIN_TRAVEL,
          },
          { at: 1, start: 1 - ORBIT_ARC_LENGTH, end: 1 },
        ],
      },
      {
        frames: [
          { at: 0, start: 1, end: 1 + ORBIT_ARC_LENGTH },
          {
            at: ORBIT_JOIN_PHASE,
            start: 1 + ORBIT_JOIN_TRAVEL,
            end: 1 + ORBIT_JOIN_TRAVEL + ORBIT_ARC_LENGTH,
          },
          { at: 1, start: 2, end: 2 + ORBIT_ARC_LENGTH },
        ],
      },
    ],
  },
} satisfies Record<string, CircleProgressAnimation>
