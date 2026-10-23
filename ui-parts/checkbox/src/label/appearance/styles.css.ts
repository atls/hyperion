import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { hiddenInputStyles }   from '../../hidden-input/index.js'

export const labelAppearanceVariables = createThemeContract({
  default: {
    color: null,
  },
  hover: {
    color: null,
  },
  disabled: {
    color: null,
  },
  focused: {
    color: null,
  },
})

export const labelAppearanceStyles = style({
  color: labelAppearanceVariables.default.color,
  selectors: {
    [`${hiddenInputStyles}:hover:not(:disabled) ~ &`]: {
      color: labelAppearanceVariables.hover.color,
    },
    [`${hiddenInputStyles}:focus-visible:not(:disabled) ~ &`]: {
      color: labelAppearanceVariables.focused.color,
    },
    [`${hiddenInputStyles}:disabled ~ &`]: {
      color: labelAppearanceVariables.disabled.color,
    },
  },
})
