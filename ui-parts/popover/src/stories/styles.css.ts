import { style }             from '@vanilla-extract/css'

import { borderWidths }      from '@atls-ui/theme/tokens'
import { borderStyles }      from '@atls-ui/theme/tokens'
import { typography }        from '@atls-ui/theme/tokens'

import { CONTENT_SLOT_SIZE } from './constants.js'
export const contentSlotStyles = style({
  ...typography.label.sm,
  boxSizing: 'border-box',
  width: CONTENT_SLOT_SIZE,
  height: CONTENT_SLOT_SIZE,
  borderWidth: borderWidths.sm,
  borderStyle: borderStyles.solid,
})
