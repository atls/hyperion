import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { fieldStyles }         from '../../../styles/layout/container.css.js'
export const inputIndicatorAppearanceVariables = createThemeContract({
  default: { color: null },
  hover: { color: null },
  focused: { color: null },
  disabled: { color: null },
})
export const inputIndicatorAppearanceStyles = style({
  color: inputIndicatorAppearanceVariables.default.color,
  selectors: {
    [`${fieldStyles}:hover:not([data-disabled="true"]) &`]: {
      color: inputIndicatorAppearanceVariables.hover.color,
    },
    [`${fieldStyles}:focus-within:not([data-disabled="true"]) &`]: {
      color: inputIndicatorAppearanceVariables.focused.color,
    },
    [`${fieldStyles}[data-disabled="true"] &`]: {
      color: inputIndicatorAppearanceVariables.disabled.color,
    },
  },
})
