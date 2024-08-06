import { style } from '@vanilla-extract/css'

export const hiddenInputStyles = style({
  position: 'absolute',
  cursor: 'pointer',
  opacity: 0,
  width: 0,
  height: 0,
})
