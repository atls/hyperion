import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

export const checkBaseStyles = style({
  display: 'none',
  alignItems: 'center',
  justifyContent: 'center',
})

export const checkCheckedStyles = style({
  display: 'flex',
})

const checkBlueAppearanceStyles = style({
  backgroundColor: vars.colors.blue,
})

const checkGreenAppearanceStyles = style({
  backgroundColor: vars.colors.green,
})

const checkRedAppearanceStyles = style({
  backgroundColor: vars.colors.red,
})

export const checkAppearanceStyles = {
  blue: checkBlueAppearanceStyles,
  green: checkGreenAppearanceStyles,
  red: checkRedAppearanceStyles,
}

export const checkShapeStyles = style({
  width: `calc(100% - ${vars.radii.f3})`,
  height: `calc(100% - ${vars.radii.f3})`,
  borderRadius: vars.radii.f4,
})
