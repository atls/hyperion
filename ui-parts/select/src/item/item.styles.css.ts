import { style } from '@vanilla-extract/css'

export const baseItemStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  cursor: 'pointer',
  width: '100%',
  hyphens: 'auto',
  alignItems: 'center',
})

export const highlightedMenuItemStyles = style({
  backgroundColor: 'aqua',
})
