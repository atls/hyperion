import { style }           from '@vanilla-extract/css'

import { animations }      from '@atls-ui/theme/tokens'

import { containerStyles } from '../container/styles/base.css.js'
export const linkAnimationStyles = style({
  transitionProperty: 'color',
  transitionDuration: animations.duration.xs,
  transitionTimingFunction: animations.easing.easeOut,
  selectors: {
    [`${containerStyles}:focus-visible:not([aria-disabled="true"]) &`]: {
      transitionDuration: animations.duration.sm,
    },
    [`${containerStyles}[aria-disabled="true"] &`]: {
      transitionDuration: animations.duration.sm,
      transitionTimingFunction: animations.easing.easeInOut,
    },
  },
  '@media': { '(prefers-reduced-motion: reduce)': { transitionProperty: 'none' } },
})
