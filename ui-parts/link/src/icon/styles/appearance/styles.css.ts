import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { containerStyles }     from '../../../container/styles/base.css.js'
export const iconAppearanceVariables = createThemeContract({
  default: { color: null },
  hover: { color: null },
  focused: { color: null },
  pressed: { color: null },
  disabled: { color: null },
})
export const iconAppearanceStyles = style({
  display: 'inline-flex',
  width: '1em',
  height: '1em',
  flexShrink: 0,
  verticalAlign: 'middle',
  color: iconAppearanceVariables.default.color,

  selectors: {
    [`${containerStyles}:hover:not([aria-disabled="true"]) &`]: iconAppearanceVariables.hover,
    [`${containerStyles}:focus-visible:not([aria-disabled="true"]) &`]: {
      ...iconAppearanceVariables.focused,
    },
    [`${containerStyles}:active:not([aria-disabled="true"]) &`]: iconAppearanceVariables.pressed,
    [`${containerStyles}[aria-disabled="true"] &`]: {
      ...iconAppearanceVariables.disabled,
    },
  },
})
