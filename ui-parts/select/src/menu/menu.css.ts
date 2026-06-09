import { style } from '@vanilla-extract/css'

export const baseMenuStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  listStyleType: 'none',
  flexDirection: 'column',
  outline: 'none',
  padding: 0,
  width: 100,
  height: 'auto',
  border: '1px solid black',
  borderRadius: 4,
})
