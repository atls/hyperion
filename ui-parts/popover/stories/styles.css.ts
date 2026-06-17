import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const storyTriggerStyles = style({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 32,
  padding: `${vars.space.zero} ${vars.space.g16}`,
  color: vars.colors.blackThreeQuarters,
  backgroundColor: vars.colors.white,
  border: vars.borders.normalMediumGray,
  cursor: 'pointer',
})

export const storyContainerStyles = style({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 100,
  minHeight: 64,
  padding: vars.space.g10,
  margin: vars.space.zero,
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadows.gordonsgreen,
  borderRadius: vars.radii.f8,
  zIndex: 1000,
})

export const storyContainerCloseStyles = style({
  cursor: 'pointer',
  color: vars.colors.blueProtective,
})

export const storyRootAppearanceStyles = style({
  backgroundColor: vars.colors.gray,
  boxShadow: vars.shadows.jaguar,
})

export const storyRootShapeStyles = style({
  minWidth: 220,
  borderRadius: vars.radii.f12,
})

export const storyTitleAppearanceStyles = style({
  color: vars.colors.green,
  borderBottom: vars.borders.normalGreen,
})

export const storyTitleShapeStyles = style({
  justifyContent: 'flex-start',
})

export const storyContentAppearanceStyles = style({
  color: vars.colors['text.green'],
})

export const storyContentShapeStyles = style({
  padding: `${vars.space.g16} 20px`,
})
