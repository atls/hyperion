import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const baseMenuItemStyles = style({
  color: vars.colors['text.black'],
  fontSize: vars.fontSizes.medium,
  padding: `${vars.space.g4} ${vars.space.g17}`,
  cursor: 'pointer',
})

export const selectedMenuItemStyles = style({
  fontWeight: vars.fontWeights.bold,
})

export const hoveredMenuItemStyles = style({
  background: vars.colors['text.lightGray'],
})
