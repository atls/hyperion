import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme'

export const basePlaceholderLinkStyles = style({
  padding: `${vars.space.g8} ${vars.space.zero}`,
// @ts-expect-error index
  color: vars.colors['text.blue'],
  textDecoration: 'underline',
  fontFamily: vars.fonts.primary,
})
