import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { boxBaseStyles }       from '../../../box/styles/base.css.js'
export const fallbackAppearanceVariables = createThemeContract({
  default: { backgroundColor: null, color: null },
  hover: { backgroundColor: null, color: null },
  focused: { backgroundColor: null, color: null },
  pressed: { backgroundColor: null, color: null },
  disabled: { backgroundColor: null, color: null },
})
export const fallbackAppearanceStyles = style({
  backgroundColor: fallbackAppearanceVariables.default.backgroundColor,
  color: fallbackAppearanceVariables.default.color,
  selectors: {
    [`${boxBaseStyles}[data-clickable]:hover:not([data-disabled]) &`]:
      fallbackAppearanceVariables.hover,
    [`${boxBaseStyles}[data-clickable]:focus-visible:not([data-disabled]) &`]:
      fallbackAppearanceVariables.focused,
    [`${boxBaseStyles}[data-clickable]:active:not([data-disabled]) &`]:
      fallbackAppearanceVariables.pressed,
    [`${boxBaseStyles}[data-disabled] &`]: fallbackAppearanceVariables.disabled,
  },
})
