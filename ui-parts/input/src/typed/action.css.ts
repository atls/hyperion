import { style } from '@vanilla-extract/css'

export const actionStyles = style({
  alignItems: 'center',
  appearance: 'none',
  background: 'transparent',
  border: 0,
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  outline: 0,
  padding: 0,
  width: '100%',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})
