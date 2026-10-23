import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { boxBaseStyles }       from '../../box/styles/base.css.js'
import { hiddenInputStyles }   from '../../hidden-input/index.js'

export const checkAppearanceVariables = createThemeContract({
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

export const checkAppearanceStyles = style({
  color: checkAppearanceVariables.default.color,
  selectors: {
    [`${hiddenInputStyles}:hover:not(:disabled) + ${boxBaseStyles} &`]: {
      color: checkAppearanceVariables.hover.color,
    },
    [`${hiddenInputStyles}:focus-visible:not(:disabled) + ${boxBaseStyles} &`]: {
      color: checkAppearanceVariables.focused.color,
    },
    [`${hiddenInputStyles}:disabled + ${boxBaseStyles} &`]: {
      color: checkAppearanceVariables.disabled.color,
    },
  },
})
