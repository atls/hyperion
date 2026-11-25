import { style }        from '@vanilla-extract/css'

import { borderStyles } from '@atls-ui/theme'
export const messageStyles = style({
  boxSizing: 'border-box',
  borderStyle: borderStyles.solid,
  overflowWrap: 'anywhere',
})
