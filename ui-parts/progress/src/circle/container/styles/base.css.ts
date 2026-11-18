import { style }       from '@vanilla-extract/css'

import { strokeWidth } from '../../track/styles/variables.css.js'

export const containerStyles = style({
  position: 'relative',
  display: 'inline-grid',
  boxSizing: 'border-box',
  verticalAlign: 'top',
  padding: `calc(${strokeWidth} / 2)`,
})
