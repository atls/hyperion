import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const baseIndicatorStyles = style({
  background: 'transparent',
  borderWidth: 0,
  outline: 'none',
  cursor: 'pointer',
  paddingTop: vars.space.g1,
  paddingBottom: vars.space.zero,
  boxSizing: 'border-box',
})
