import { style }          from '@vanilla-extract/css'

import { shapeVariables } from '../shape/styles.css.js'

export const contentStyles = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: shapeVariables.gap,
  minWidth: 0,
})

export const fullWidthContentStyles = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1fr)',
  columnGap: shapeVariables.gap,
  width: '100%',
})

export const labelStyles = style({
  minWidth: 0,
  color: 'inherit',
})
