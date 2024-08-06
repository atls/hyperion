import { style }             from '@vanilla-extract/css'

import { createShapeStyles } from '../utils/index.js'

export const shapeGhostStyles = createShapeStyles({
  size: 'auto',
  paddingRight: 0,
  paddingLeft: 0,
})

export const nulledGhostStyles = style({
  background: 'none',
  border: 'none',
})
