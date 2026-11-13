import { style }         from '@vanilla-extract/css'

import { animations }    from '@atls-ui/theme/tokens'

import { segmentLength } from '../styles/base.css.js'

export const valueTransitionStyles = style({
  transitionProperty: segmentLength.slice(4, -1),
  transitionDuration: animations.duration.md,
  transitionTimingFunction: animations.easing.easeOut,
  '@media': {
    '(prefers-reduced-motion: reduce)': { transitionDuration: animations.duration.none },
  },
})
