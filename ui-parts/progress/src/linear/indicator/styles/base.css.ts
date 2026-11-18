import { createVar }  from '@vanilla-extract/css'
import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'
export const indicatorTransitionDuration = createVar()
const indicatorStyles = style({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
})
export const valueStyles = style([
  indicatorStyles,
  {
    transitionProperty: 'width',
    transitionDuration: indicatorTransitionDuration,
    '@media': {
      '(prefers-reduced-motion: reduce)': { transitionDuration: animations.duration.none },
    },
  },
])
export const movingStyles = style([
  indicatorStyles,
  {
    animationDuration: indicatorTransitionDuration,
    animationIterationCount: 'infinite',
    animationFillMode: 'both',
    '@media': {
      '(prefers-reduced-motion: reduce)': {
        animationPlayState: 'paused',
        animationDelay: `calc(${indicatorTransitionDuration} / -2)`,
      },
    },
  },
])
