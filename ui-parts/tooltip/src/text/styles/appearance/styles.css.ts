import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

export const textAppearanceVariables = createThemeContract({ color: null })
export const textAppearanceStyles = style({ color: textAppearanceVariables.color })
