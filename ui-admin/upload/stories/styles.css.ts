import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-admin/theme'

export const customPlaceholderRootStyles = style({
  gap: vars.space.g4,
  padding: `${vars.space.g16} ${vars.space.g24}`,
  borderRadius: vars.radii.f8,
  backgroundColor: vars.colors.blueProtective,
})

export const customPlaceholderIconStyles = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 64,
  height: 64,
  borderRadius: vars.radii.full,
  color: vars.colors.blue,
  fill: vars.colors.blue,
  backgroundColor: vars.colors.white,
})

export const customPlaceholderAcceptStyles = style({
  padding: vars.space.zero,
  color: vars.colors.black,
  fontWeight: vars.fontWeights.bold,
})

export const customPlaceholderLinkStyles = style({
  padding: vars.space.zero,
  color: vars.colors.blue,
  fontWeight: vars.fontWeights.bold,
  textDecoration: 'none',
})

export const toggleThemeStyles = style({
  width: 'fit-content',
  margin: `${vars.space.zero} ${vars.space.zero} ${vars.space.g10} auto`,
})

export const uploadAreaStyles = style({
  width: '100%',
  height: 200,
})
