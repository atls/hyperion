import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme'
export const menuAnimationStyles = style({
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: `${animations.duration.none} !important`,
    },
  },
})
