import { globalStyle } from '@vanilla-extract/css'
import { style }       from '@vanilla-extract/css'

import { borderStyles } from '@atls-ui/theme/tokens'
import { borderWidths } from '@atls-ui/theme/tokens'

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
  outlineStyle: borderStyles.solid,
  outlineWidth: borderWidths.sm,
  textAlign: 'center',
  verticalAlign: 'middle',
  wordBreak: 'break-word',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

globalStyle(`:where(${baseStyles})`, {
  paddingBlock: 0,
})

export const fullWidthStyles = style({
  width: '100%',
})
