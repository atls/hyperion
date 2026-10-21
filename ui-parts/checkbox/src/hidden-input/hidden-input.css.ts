import { style } from '@vanilla-extract/css'

export const hiddenInputStyles = style({
  position: 'absolute',
  cursor: 'pointer',
  opacity: 0,
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
})
