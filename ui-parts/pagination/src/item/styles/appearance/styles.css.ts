import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { borderStyles }        from '@atls-ui/theme/tokens'

import { itemStyles }          from '../base.css.js'

export const itemAppearanceVariables = createThemeContract({
  default: { background: null, borderColor: null },
  hover: { background: null, borderColor: null },
  focused: { background: null, borderColor: null },
  disabled: { background: null, borderColor: null },
})

export const itemAppearanceStyles = style({
  background: itemAppearanceVariables.default.background,
  borderColor: itemAppearanceVariables.default.borderColor,
  borderStyle: borderStyles.solid,
  selectors: {
    [`${itemStyles}:hover:not(:disabled) &`]: {
      background: itemAppearanceVariables.hover.background,
      borderColor: itemAppearanceVariables.hover.borderColor,
    },
    [`${itemStyles}:focus-visible &`]: {
      background: itemAppearanceVariables.focused.background,
      borderColor: itemAppearanceVariables.focused.borderColor,
    },
    [`${itemStyles}:disabled &`]: {
      background: itemAppearanceVariables.disabled.background,
      borderColor: itemAppearanceVariables.disabled.borderColor,
    },
  },
})
