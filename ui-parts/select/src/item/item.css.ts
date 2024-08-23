import { style } from '@vanilla-extract/css'

export const baseItemStyles = style({
  display: 'flex',
  boxSizing: 'border-box',
  cursor: 'pointer',
  width: '100%',
  hyphens: 'auto',
  alignItems: 'center',
  padding: '6px 12px',
})

export const highlightedMenuItemStyles = style({
  backgroundColor: 'aqua',
})
