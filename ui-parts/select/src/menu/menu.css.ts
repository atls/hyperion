import { style } from '@vanilla-extract/css'

export const baseMenuStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  listStyleType: 'none',
  flexDirection: 'column',
  outline: 'none',
  padding: 0,
  height: 'auto',
})
