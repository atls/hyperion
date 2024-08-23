import { style } from '@vanilla-extract/css'

export const baseStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  wordBreak: 'break-word',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  border: '1px solid transparent',
})
