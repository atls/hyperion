import { style } from '@vanilla-extract/css'

export const baseInputStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  boxShadow: 'none',
  outline: 'none',
  width: '100%',
  border: '1px solid transparent',
  borderRadius: 0,
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'text',
})
