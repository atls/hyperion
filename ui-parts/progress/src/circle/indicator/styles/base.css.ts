import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'

const segmentStyles = style({
  stroke: 'white',
  strokeLinecap: 'round',
  transform: 'scaleX(-1)',
  transformBox: 'fill-box',
  transformOrigin: 'center',
})
export const movingStyles = style([
  segmentStyles,
  {
    animationIterationCount: 'infinite',
    animationFillMode: 'both',
    '@media': { '(prefers-reduced-motion: reduce)': { animationPlayState: 'paused' } },
  },
])
export const valueStyles = style([
  segmentStyles,
  {
    transitionProperty: 'stroke-dasharray, stroke-dashoffset, opacity',
    transitionDuration: animations.duration.md,
    transitionTimingFunction: animations.easing.easeOut,
    '@media': {
      '(prefers-reduced-motion: reduce)': { transitionDuration: animations.duration.none },
    },
  },
])
