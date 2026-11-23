import { style }            from '@vanilla-extract/css'

import { borderWidths }     from '@atls-ui/theme/tokens'
import { spacing }          from '@atls-ui/theme/tokens'
import { radii }            from '@atls-ui/theme/tokens'

import { REMOVE_ICON_SIZE } from './constants.js'
export const removeStyle = style({
  padding: spacing.component.none,
  borderWidth: borderWidths.none,
  borderRadius: radii.none,
  background: 'transparent',
  boxShadow: 'none',
  width: REMOVE_ICON_SIZE,
  height: REMOVE_ICON_SIZE,
  flexShrink: 0,
  lineHeight: 1,
})
