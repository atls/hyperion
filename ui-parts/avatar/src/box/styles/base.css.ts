import { createVar }    from '@vanilla-extract/css'
import { style }        from '@vanilla-extract/css'

import { borderWidths } from '@atls-ui/theme/tokens'
import { spacing }      from '@atls-ui/theme/tokens'
export const boxBorderWidth = createVar()
export const boxBaseStyles = style({
  position: 'relative',
  display: 'inline-flex',
  flexShrink: 0,
  verticalAlign: 'middle',
  boxSizing: 'border-box',
  padding: spacing.component.none,
  margin: spacing.component.none,
  border: borderWidths.none,
  background: 'none',
  font: 'inherit',
  isolation: 'isolate',
  selectors: {
    '&[data-clickable]:not(:disabled)': { cursor: 'pointer' },
    '&[data-clickable]:focus-visible': { outline: 'none' },
  },
})
