import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

export const cardAppearanceVariables = createThemeContract({
  default: { backgroundColor: null, borderColor: null, shadow: null },
  disabled: { backgroundColor: null, borderColor: null, shadow: null },
  focused: { backgroundColor: null, borderColor: null, shadow: null },
  hover: { backgroundColor: null, borderColor: null, shadow: null },
  pressed: { backgroundColor: null, borderColor: null, shadow: null },
})

export const cardAppearanceStyles = style({
  backgroundColor: cardAppearanceVariables.default.backgroundColor,
  borderColor: cardAppearanceVariables.default.borderColor,
  boxShadow: cardAppearanceVariables.default.shadow,
})

export const cardInteractiveStyles = style({
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: cardAppearanceVariables.hover.backgroundColor,
      borderColor: cardAppearanceVariables.hover.borderColor,
      boxShadow: cardAppearanceVariables.hover.shadow,
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: cardAppearanceVariables.focused.backgroundColor,
      borderColor: cardAppearanceVariables.focused.borderColor,
      boxShadow: cardAppearanceVariables.focused.shadow,
    },
    '&:active:not(:disabled)': {
      backgroundColor: cardAppearanceVariables.pressed.backgroundColor,
      borderColor: cardAppearanceVariables.pressed.borderColor,
      boxShadow: cardAppearanceVariables.pressed.shadow,
    },
    '&:disabled': {
      backgroundColor: cardAppearanceVariables.disabled.backgroundColor,
      borderColor: cardAppearanceVariables.disabled.borderColor,
      boxShadow: cardAppearanceVariables.disabled.shadow,
    },
  },
})
