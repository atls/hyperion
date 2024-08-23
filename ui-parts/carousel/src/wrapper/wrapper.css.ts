import { style } from '@vanilla-extract/css'

export const baseWrapperStyles = style({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
})

export const horizontalWrapperStyles = style({
  height: '100%',
  flexDirection: 'row',
})

export const verticalWrapperStyles = style({
  width: '100%',
  flexDirection: 'column',
})
