import type { LinearProgressAnimation } from './interfaces.js'

import { animations }                   from '@atls-ui/theme/tokens'

import { passThrough }                  from './keyframes.css.js'
export const linearProgressAnimations = {
  indeterminate: {
    duration: `${animations.loopDuration.sm}ms`,
    easing: animations.easing.linear,
    segments: [passThrough],
  },
} satisfies Record<string, LinearProgressAnimation>
