import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const baseContainerStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 30,
  minHeight: 32,
  padding: `${vars.space.g8} ${vars.space.g12}`,
  margin: vars.space.zero,
  color: vars.colors.white,
  wordWrap: 'break-word',
  backgroundColor: vars.colors.blackThreeQuarters,
  borderRadius: vars.radii.f8,
  boxShadow: vars.shadows.gordonsgreen,
  zIndex: 1000,
})
