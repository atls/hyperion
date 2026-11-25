import { style }        from '@vanilla-extract/css'

import { spacing }      from '@atls-ui/theme'
import { borderWidths } from '@atls-ui/theme'
export const toggleStyles = style({
  appearance: 'none',
  font: 'inherit',
  lineHeight: 1,
  display: 'inline-flex',
  alignItems: 'center',
  padding: spacing.component.none,
  borderWidth: borderWidths.none,
  background: 'none',
  cursor: 'pointer',
  flexShrink: 0,
  selectors: { '&:disabled': { cursor: 'not-allowed' } },
})
