import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'
export const imageAnimationStyles = style({
  transitionProperty: 'opacity, background-color, color',
  transitionDuration: animations.duration.lg,
  transitionTimingFunction: animations.easing.easeInOut,
  '@media': {
    '(prefers-reduced-motion: reduce)': { transitionDuration: animations.duration.none },
  },
})
