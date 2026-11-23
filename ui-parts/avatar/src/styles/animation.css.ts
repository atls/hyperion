import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'
export const avatarAnimationStyles = style({
  transitionProperty: 'background-color, color, opacity, box-shadow, outline-color',
  transitionDuration: animations.duration.lg,
  transitionTimingFunction: animations.easing.easeOut,
  '::after': {
    transitionProperty: 'box-shadow, outline-color',
    transitionDuration: animations.duration.lg,
    transitionTimingFunction: animations.easing.easeOut,
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: animations.duration.none,
      '::after': { transitionDuration: animations.duration.none },
    },
  },
})
