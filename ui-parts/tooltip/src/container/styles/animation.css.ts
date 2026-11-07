import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'
import { opacity }    from '@atls-ui/theme/tokens'

export const containerAnimationStyles = style({
  opacity: opacity.full,
  transition: `opacity ${animations.duration.sm} ${animations.easing.easeOut}`,
  selectors: {
    '&[data-transition="initial"]': { opacity: opacity.none },
    '&[data-transition="close"]': { opacity: opacity.none, pointerEvents: 'none' },
  },
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: animations.duration.none,
    },
  },
})
