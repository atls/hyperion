import { style } from '@vanilla-extract/css'

export const cardBaseStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
  overflow: 'hidden',
  borderStyle: 'solid',
})

export const cardClickableStyles = style({
  appearance: 'none',
  color: 'inherit',
  cursor: 'pointer',
  font: 'inherit',
  outline: 'none',
  textAlign: 'inherit',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})
