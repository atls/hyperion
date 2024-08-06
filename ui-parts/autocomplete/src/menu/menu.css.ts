import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const baseMenuStyles = style({
  margin: vars.space.zero,
  backgroundColor: vars.colors.white,
  border: vars.borders.normalLightGray,
  boxSizing: 'border-box',
  maxHeight: '300px',
  overflow: 'auto',
})
