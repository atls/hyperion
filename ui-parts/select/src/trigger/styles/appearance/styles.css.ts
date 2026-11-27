import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { borderWidths }        from '@atls-ui/theme'

export const triggerAppearanceVariables = createThemeContract({
  default: { backgroundColor: null, borderColor: null, shadow: null },
  hover: { backgroundColor: null, borderColor: null, shadow: null },
  focused: { backgroundColor: null, borderColor: null, shadow: null },
  disabled: { backgroundColor: null, borderColor: null, shadow: null },
})
export const triggerAppearanceStyles = style({
  backgroundColor: triggerAppearanceVariables.default.backgroundColor,
  borderColor: triggerAppearanceVariables.default.borderColor,
  boxShadow: triggerAppearanceVariables.default.shadow,
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: triggerAppearanceVariables.hover.backgroundColor,
      borderColor: triggerAppearanceVariables.hover.borderColor,
      boxShadow: triggerAppearanceVariables.hover.shadow,
    },
    '&:is(:focus-visible, [aria-expanded="true"]):not(:disabled)': {
      outlineWidth: borderWidths.none,
      borderWidth: borderWidths.md,
      backgroundColor: triggerAppearanceVariables.focused.backgroundColor,
      borderColor: triggerAppearanceVariables.focused.borderColor,
      boxShadow: triggerAppearanceVariables.focused.shadow,
    },
    '&:disabled': {
      backgroundColor: triggerAppearanceVariables.disabled.backgroundColor,
      borderColor: triggerAppearanceVariables.disabled.borderColor,
      boxShadow: triggerAppearanceVariables.disabled.shadow,
    },
  },
})
