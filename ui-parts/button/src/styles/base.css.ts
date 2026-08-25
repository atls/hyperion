import { style } from '@vanilla-extract/css'

export const baseStyles = style({
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
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
