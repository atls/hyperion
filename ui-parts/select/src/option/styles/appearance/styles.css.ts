import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

export const optionAppearanceVariables = createThemeContract({
  default: { backgroundColor: null, borderColor: null, color: null },
  hover: { backgroundColor: null, borderColor: null, color: null },
  active: { backgroundColor: null, borderColor: null, color: null },
  disabled: { backgroundColor: null, borderColor: null, color: null },
  focused: { backgroundColor: null, borderColor: null, color: null },
})

export const optionAppearanceStyles = style({
  backgroundColor: optionAppearanceVariables.default.backgroundColor,
  borderColor: optionAppearanceVariables.default.borderColor,
  color: optionAppearanceVariables.default.color,
  selectors: {
    '&:hover:not([aria-disabled="true"])': {
      backgroundColor: optionAppearanceVariables.hover.backgroundColor,
      borderColor: optionAppearanceVariables.hover.borderColor,
      color: optionAppearanceVariables.hover.color,
    },
    '&:is(:active, [aria-selected="true"]):not([aria-disabled="true"])': {
      backgroundColor: optionAppearanceVariables.active.backgroundColor,
      borderColor: optionAppearanceVariables.active.borderColor,
      color: optionAppearanceVariables.active.color,
    },
    '&:is(:focus-visible, [data-focused="true"]):not([aria-disabled="true"])': {
      backgroundColor: optionAppearanceVariables.focused.backgroundColor,
      borderColor: optionAppearanceVariables.focused.borderColor,
      color: optionAppearanceVariables.focused.color,
    },
    '&[aria-disabled="true"]': {
      backgroundColor: optionAppearanceVariables.disabled.backgroundColor,
      borderColor: optionAppearanceVariables.disabled.borderColor,
      color: optionAppearanceVariables.disabled.color,
    },
  },
})
