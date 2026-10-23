import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { hiddenInputStyles }   from '../../../hidden-input/index.js'

const appearanceValues = {
  backgroundColor: null,
  borderColor: null,
  markColor: null,
  shadow: null,
}

export const boxAppearanceVariables = createThemeContract({
  default: appearanceValues,
  hover: appearanceValues,
  disabled: appearanceValues,
  focused: appearanceValues,
})

export const boxAppearanceStyles = style({
  backgroundColor: boxAppearanceVariables.default.backgroundColor,
  borderColor: boxAppearanceVariables.default.borderColor,
  boxShadow: boxAppearanceVariables.default.shadow,
  color: boxAppearanceVariables.default.markColor,
  selectors: {
    [`${hiddenInputStyles}:hover:not(:disabled) + &`]: {
      backgroundColor: boxAppearanceVariables.hover.backgroundColor,
      borderColor: boxAppearanceVariables.hover.borderColor,
      boxShadow: boxAppearanceVariables.hover.shadow,
      color: boxAppearanceVariables.hover.markColor,
    },
    [`${hiddenInputStyles}:focus-visible:not(:disabled) + &`]: {
      backgroundColor: boxAppearanceVariables.focused.backgroundColor,
      borderColor: boxAppearanceVariables.focused.borderColor,
      boxShadow: boxAppearanceVariables.focused.shadow,
      color: boxAppearanceVariables.focused.markColor,
    },
    [`${hiddenInputStyles}:disabled + &`]: {
      backgroundColor: boxAppearanceVariables.disabled.backgroundColor,
      borderColor: boxAppearanceVariables.disabled.borderColor,
      boxShadow: boxAppearanceVariables.disabled.shadow,
      color: boxAppearanceVariables.disabled.markColor,
    },
  },
})
