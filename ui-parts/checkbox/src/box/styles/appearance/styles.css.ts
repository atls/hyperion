import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { hiddenInputStyles }   from '../../../hidden-input/index.js'

export const boxAppearanceVariables = createThemeContract({
  default: {
    backgroundColor: null,
    borderColor: null,
    shadow: null,
  },
  hover: {
    backgroundColor: null,
    borderColor: null,
    shadow: null,
  },
  disabled: {
    backgroundColor: null,
    borderColor: null,
    shadow: null,
  },
  focused: {
    backgroundColor: null,
    borderColor: null,
    shadow: null,
  },
})

export const boxAppearanceStyles = style({
  backgroundColor: boxAppearanceVariables.default.backgroundColor,
  borderColor: boxAppearanceVariables.default.borderColor,
  boxShadow: boxAppearanceVariables.default.shadow,
  selectors: {
    [`${hiddenInputStyles}:hover:not(:disabled) + &`]: {
      backgroundColor: boxAppearanceVariables.hover.backgroundColor,
      borderColor: boxAppearanceVariables.hover.borderColor,
      boxShadow: boxAppearanceVariables.hover.shadow,
    },
    [`${hiddenInputStyles}:focus-visible:not(:disabled) + &`]: {
      backgroundColor: boxAppearanceVariables.focused.backgroundColor,
      borderColor: boxAppearanceVariables.focused.borderColor,
      boxShadow: boxAppearanceVariables.focused.shadow,
    },
    [`${hiddenInputStyles}:disabled + &`]: {
      backgroundColor: boxAppearanceVariables.disabled.backgroundColor,
      borderColor: boxAppearanceVariables.disabled.borderColor,
      boxShadow: boxAppearanceVariables.disabled.shadow,
    },
  },
})
