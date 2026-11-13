import { style }        from '@vanilla-extract/css'

import { borderWidths } from '@atls-ui/theme/tokens'
import { spacing }      from '@atls-ui/theme/tokens'

export const closeStyles = style({
  padding: spacing.component.none,
  border: borderWidths.none,
  background: 'none',
  display: 'flex',
  flex: 'none',
  cursor: 'pointer',
})
