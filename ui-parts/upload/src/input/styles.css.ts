import { style }        from '@vanilla-extract/css'

import { spacing }      from '@atls-ui/theme/tokens'
import { borderWidths } from '@atls-ui/theme/tokens'

export const inputStyles = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: spacing.component.none,
  border: borderWidths.none,
  clipPath: 'inset(50%)',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
})
