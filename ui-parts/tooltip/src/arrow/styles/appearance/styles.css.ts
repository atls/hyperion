import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

export const arrowAppearanceVariables = createThemeContract({ color: null })
export const arrowAppearanceStyles = style({ fill: arrowAppearanceVariables.color })
