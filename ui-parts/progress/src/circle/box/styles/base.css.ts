import { style } from '@vanilla-extract/css'

export const boxStyles = style({
  position: 'relative',
  zIndex: 0,
  boxSizing: 'border-box',
  minWidth: 0,
  minHeight: 0,
  display: 'grid',
  placeItems: 'center',
})
