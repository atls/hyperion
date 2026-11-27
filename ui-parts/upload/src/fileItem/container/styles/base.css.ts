import { style } from '@vanilla-extract/css'
export const containerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  minWidth: 0,
})
export const rowStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 0,
})
