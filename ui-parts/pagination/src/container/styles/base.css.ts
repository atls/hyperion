import { style }   from '@vanilla-extract/css'

import { itemGap } from './shape/variables.css.js'

export const containerStyles = style({
  alignItems: 'center',
  display: 'inline-flex',
  gap: itemGap,
  isolation: 'isolate',
})
