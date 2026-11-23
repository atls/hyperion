import type { CircleProgressAnimation } from './interfaces.js'

import { animations }                   from '@atls-ui/theme/tokens'

import { orbitLeading }                 from './keyframes.css.js'
import { orbitTrailing }                from './keyframes.css.js'
import { spinner }                      from './keyframes.css.js'
export const circleProgressAnimations = {
  spinner: {
    duration: `${animations.loopDuration.sm}ms`,
    easing: animations.easing.linear,
    segments: [spinner],
  },
  orbit: {
    duration: `${animations.loopDuration.md}ms`,
    easing: `cubic-bezier(${animations.curves.smooth.join(', ')})`,
    segments: [orbitLeading, orbitTrailing],
  },
} satisfies Record<string, CircleProgressAnimation>
