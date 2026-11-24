import { style }        from '@vanilla-extract/css'

import { iconSizes }    from '@atls-ui/theme'
import { borderWidths } from '@atls-ui/theme/tokens'
import { spacing }      from '@atls-ui/theme/tokens'
import { radii }        from '@atls-ui/theme/tokens'
export const removeStyle = style({
  padding: spacing.component.none,
  borderWidth: borderWidths.none,
  borderRadius: radii.none,
  background: 'transparent',
  boxShadow: 'none',
  width: iconSizes.xs,
  height: iconSizes.xs,
  flexShrink: 0,
  lineHeight: 1,
})
