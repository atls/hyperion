import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

export const boxAppearanceVariables = createThemeContract({
  backgroundColor: null,
  shadow: null,
})
export const boxAppearanceStyles = style({
  backgroundColor: boxAppearanceVariables.backgroundColor,
  filter: boxAppearanceVariables.shadow,
})
