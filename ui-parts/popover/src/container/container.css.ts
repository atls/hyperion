import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const containerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  margin: vars.space.zero,
  minWidth: 180,
  backgroundColor: vars.colors.white,
  borderRight: vars.radii.f2,
  boxShadow: vars.shadows.gordonsgreen,
  zIndex: 1000,
})
