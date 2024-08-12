import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme'

export const basePlaceholderAcceptStyles = style({
  padding: `${vars.space.g8} ${vars.space.zero}`,
  color: vars.colors['icons.placeholder'],
  fontFamily: vars.fonts.primary,
})
