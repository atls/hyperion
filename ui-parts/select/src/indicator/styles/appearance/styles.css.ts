import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { triggerBaseStyles }   from '../../../trigger/styles/base.css.js'
export const indicatorAppearanceVariables = createThemeContract({
  default: { color: null },
  hover: { color: null },
  focused: { color: null },
  disabled: { color: null },
})
export const indicatorAppearanceStyles = style({
  color: indicatorAppearanceVariables.default.color,
  selectors: {
    [`${triggerBaseStyles}:hover:not(:disabled) &`]: {
      color: indicatorAppearanceVariables.hover.color,
    },
    [`${triggerBaseStyles}:focus-visible:not(:disabled) &`]: {
      color: indicatorAppearanceVariables.focused.color,
    },
    [`${triggerBaseStyles}:disabled &`]: { color: indicatorAppearanceVariables.disabled.color },
  },
})
