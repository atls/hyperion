import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

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
