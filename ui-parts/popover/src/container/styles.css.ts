import { style } from '@vanilla-extract/css'

export const containerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
})

export const containerContentStyles = style({
  display: 'flex',
  width: '100%',
})

export const containerTitleStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
})
