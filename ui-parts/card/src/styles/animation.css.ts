import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'

export const cardAnimationStyles = style({
  transitionDuration: animations.duration.md,
  transitionProperty: 'background-color, border-color, box-shadow',
  transitionTimingFunction: animations.easing.easeInOut,
  selectors: {
    '&:focus-visible:not(:disabled)': {
      transitionDuration: animations.duration.sm,
      transitionTimingFunction: animations.easing.easeOut,
    },
    '&:active:not(:disabled)': {
      transitionDuration: animations.duration.xs,
      transitionTimingFunction: animations.easing.easeIn,
    },
    '&:disabled': {
      transitionDuration: animations.duration.sm,
      transitionTimingFunction: animations.easing.easeInOut,
    },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: animations.duration.none,
      selectors: {
        '&:focus-visible:not(:disabled)': {
          transitionDuration: animations.duration.none,
        },
        '&:active:not(:disabled)': {
          transitionDuration: animations.duration.none,
        },
        '&:disabled': {
          transitionDuration: animations.duration.none,
        },
      },
    },
  },
})
