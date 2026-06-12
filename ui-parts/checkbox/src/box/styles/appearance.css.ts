import { style } from '@vanilla-extract/css'

import { vars }  from '@atls-ui-parts/theme'

const boxBlueAppearanceStyles = style({
  border: vars.borders.normalBlue,
})

const boxGreenAppearanceStyles = style({
  border: vars.borders.normalGreen,
})

const boxRedAppearanceStyles = style({
  border: vars.borders.normalRed,
})
export const boxAppearanceStyles = {
  blue: boxBlueAppearanceStyles,
  green: boxGreenAppearanceStyles,
  red: boxRedAppearanceStyles,
}
