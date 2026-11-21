import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { containerStyles }     from '../../../container/styles/base.css.js'
export const textAppearanceVariables = createThemeContract({
  default: { color: null, textDecorationLine: null },
  hover: { color: null, textDecorationLine: null },
  pressed: { color: null, textDecorationLine: null },
  focused: { color: null, textDecorationLine: null },
  disabled: { color: null, textDecorationLine: null },
})
export const textAppearanceStyles = style({
  color: textAppearanceVariables.default.color,
  textDecorationLine: textAppearanceVariables.default.textDecorationLine,
  textUnderlinePosition: 'from-font',

  selectors: {
    [`${containerStyles}:hover:not([aria-disabled="true"]) &`]: textAppearanceVariables.hover,
    [`${containerStyles}:focus-visible:not([aria-disabled="true"]) &`]: {
      ...textAppearanceVariables.focused,
    },
    [`${containerStyles}:active:not([aria-disabled="true"]) &`]: {
      ...textAppearanceVariables.pressed,
      textDecorationSkipInk: 'none',
    },
    [`${containerStyles}[aria-disabled="true"] &`]: {
      ...textAppearanceVariables.disabled,
    },
  },
})
