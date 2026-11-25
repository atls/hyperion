import { style }        from '@vanilla-extract/css'

import { borderWidths } from '@atls-ui/theme'
import { borderStyles } from '@atls-ui/theme'
export const optionBaseStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  overflowWrap: 'anywhere',
  cursor: 'pointer',
  borderStyle: borderStyles.solid,
  selectors: {
    '& + &': { borderTopWidth: borderWidths.none },
    '&[aria-disabled="true"]': { cursor: 'not-allowed' },
  },
})
