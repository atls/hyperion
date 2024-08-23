import { style } from '@vanilla-extract/css'

export const backdropStyles = style({
  display: 'flex',
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 1000,
  left: 0,
  top: 0,
  backgroundColor: 'rgba(31, 31, 39, 0.4)',
})
