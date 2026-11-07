import { keyframes }  from '@vanilla-extract/css'
import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'

const firstSegmentAnimation = keyframes({
  '0%': { strokeDashoffset: -82 },
  '50%': { strokeDashoffset: -132 },
  '100%': { strokeDashoffset: -82 },
})

const secondSegmentAnimation = keyframes({
  '0%': { strokeDashoffset: -100 },
  '50%': { strokeDashoffset: -150 },
  '100%': { strokeDashoffset: -200 },
})

const indeterminateDuration = '5s'
const indeterminateEasing = 'cubic-bezier(.45, 0, .55, 1)'
const spinnerDuration = '1.5s'
const spinnerAnimation = keyframes({
  from: { strokeDashoffset: 0 },
  to: { strokeDashoffset: -100 },
})

export const indicatorStyles = style({
  transition: `stroke-dashoffset ${animations.duration.md} ${animations.easing.easeOut}`,
  '@media': { '(prefers-reduced-motion: reduce)': { transition: 'none' } },
})

export const firstSegmentStyles = style({
  animation: `${firstSegmentAnimation} ${indeterminateDuration} ${indeterminateEasing} infinite`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})

export const secondSegmentStyles = style({
  animation: `${secondSegmentAnimation} ${indeterminateDuration} ${indeterminateEasing} infinite`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})

export const spinnerStyles = style({
  animation: `${spinnerAnimation} ${spinnerDuration} ${animations.easing.linear} infinite`,
  '@media': { '(prefers-reduced-motion: reduce)': { animation: 'none' } },
})
