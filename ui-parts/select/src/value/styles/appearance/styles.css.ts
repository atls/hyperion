import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { triggerBaseStyles }   from '../../../trigger/styles/base.css.js'
export const valueAppearanceVariables = createThemeContract({
  default: { color: null },
  hover: { color: null },
  focused: { color: null },
  disabled: { color: null },
  placeholder: { color: null },
})
export const valueAppearanceStyles = style({
  color: valueAppearanceVariables.default.color,
  selectors: {
    '&[data-placeholder="true"]': { color: valueAppearanceVariables.placeholder.color },
    [`${triggerBaseStyles}:hover:not(:disabled) &`]: {
      color: valueAppearanceVariables.hover.color,
    },
    [`${triggerBaseStyles}:focus-visible:not(:disabled) &`]: {
      color: valueAppearanceVariables.focused.color,
    },
    [`${triggerBaseStyles}:disabled &`]: { color: valueAppearanceVariables.disabled.color },
  },
})
