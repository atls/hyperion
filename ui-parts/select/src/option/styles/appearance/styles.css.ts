import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

export const optionAppearanceVariables = createThemeContract({
  default: { backgroundColor: null, borderColor: null, color: null },
  highlighted: { backgroundColor: null, borderColor: null, color: null },
  selected: { backgroundColor: null, borderColor: null, color: null },
  disabled: { backgroundColor: null, borderColor: null, color: null },
})
export const optionAppearanceStyles = style({
  backgroundColor: optionAppearanceVariables.default.backgroundColor,
  borderColor: optionAppearanceVariables.default.borderColor,
  color: optionAppearanceVariables.default.color,
  selectors: {
    '&[data-highlighted="true"]': {
      backgroundColor: optionAppearanceVariables.highlighted.backgroundColor,
      borderColor: optionAppearanceVariables.highlighted.borderColor,
      color: optionAppearanceVariables.highlighted.color,
    },
    '&[aria-selected="true"]': {
      backgroundColor: optionAppearanceVariables.selected.backgroundColor,
      borderColor: optionAppearanceVariables.selected.borderColor,
      color: optionAppearanceVariables.selected.color,
    },
    '&[aria-disabled="true"]': {
      backgroundColor: optionAppearanceVariables.disabled.backgroundColor,
      borderColor: optionAppearanceVariables.disabled.borderColor,
      color: optionAppearanceVariables.disabled.color,
    },
  },
})
