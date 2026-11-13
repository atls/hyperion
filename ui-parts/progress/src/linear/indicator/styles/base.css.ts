import { createVar }  from '@vanilla-extract/css'
import { style }      from '@vanilla-extract/css'

import { animations } from '@atls-ui/theme/tokens'

export const indicatorTransitionDuration = createVar()

export const indicatorStyles = style({
  transitionProperty: 'width',
  transitionDuration: indicatorTransitionDuration,
  '@media': {
    '(prefers-reduced-motion: reduce)': { transitionDuration: animations.duration.none },
  },
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
})
