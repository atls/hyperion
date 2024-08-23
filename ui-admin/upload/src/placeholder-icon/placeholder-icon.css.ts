import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme'

export const basePlaceholderIconStyles = style({
  padding: `${vars.space.g4} ${vars.space.zero}`,
  color: vars.colors['icons.placeholder'],
  fill: vars.colors['icons.placeholder'],
})
