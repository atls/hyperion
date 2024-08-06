import { style } from '@vanilla-extract/css'

export const containerBaseStyles = style({
  display: 'flex',
  position: 'relative',
  cursor: 'pointer',
  alignItems: 'center',
  userSelect: 'none',
  outline: 'none',
})
