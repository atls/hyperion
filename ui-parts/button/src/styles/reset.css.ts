import { style } from '@vanilla-extract/css'

export const baseStyles = style({
  appearance: 'none',
  border: 0,
  boxSizing: 'border-box',
  margin: 0,
  textDecoration: 'none',
  textTransform: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  outlineOffset: '-1px',
  textAlign: 'center',
  verticalAlign: 'middle',
  wordBreak: 'break-word',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

export const fullWidthStyles = style({
  width: '100%',
})
