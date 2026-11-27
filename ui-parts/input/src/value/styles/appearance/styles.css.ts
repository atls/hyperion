import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { fieldStyles }         from '../../../styles/layout/container.css.js'
export const inputValueAppearanceVariables = createThemeContract({
  default: { color: null },
  hover: { color: null },
  focused: { color: null },
  disabled: { color: null },
  placeholder: { color: null },
})
export const inputValueAppearanceStyles = style({
  color: inputValueAppearanceVariables.default.color,
  selectors: {
    '&[data-placeholder="true"]': { color: inputValueAppearanceVariables.placeholder.color },
    [`${fieldStyles}:hover:not([data-disabled="true"]) &`]: {
      color: inputValueAppearanceVariables.hover.color,
    },
    [`${fieldStyles}:focus-within:not([data-disabled="true"]) &`]: {
      color: inputValueAppearanceVariables.focused.color,
    },
    [`${fieldStyles}[data-disabled="true"] &`]: {
      color: inputValueAppearanceVariables.disabled.color,
    },
  },
})
