import { createThemeContract } from '@vanilla-extract/css'
import { style }               from '@vanilla-extract/css'

import { boxBorderWidth }      from '../base.css.js'
export const boxAppearanceVariables = createThemeContract({
  default: { borderColor: null, shadow: null, opacity: null },
  hover: { borderColor: null, shadow: null, opacity: null },
  focused: { borderColor: null, shadow: null, opacity: null },
  pressed: { borderColor: null, shadow: null, opacity: null },
  disabled: { borderColor: null, shadow: null, opacity: null },
})
export const boxAppearanceStyles = style({
  opacity: boxAppearanceVariables.default.opacity,
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    outlineStyle: 'solid',
    outlineWidth: boxBorderWidth,
    outlineOffset: `calc(0px - ${boxBorderWidth})`,
    outlineColor: boxAppearanceVariables.default.borderColor,
    boxShadow: boxAppearanceVariables.default.shadow,
    pointerEvents: 'none',
  },
  selectors: {
    '&[data-clickable]:hover:not([data-disabled])': {
      opacity: boxAppearanceVariables.hover.opacity,
    },
    '&[data-clickable]:hover:not([data-disabled])::after': {
      outlineColor: boxAppearanceVariables.hover.borderColor,
      boxShadow: boxAppearanceVariables.hover.shadow,
    },
    '&[data-clickable]:focus-visible:not([data-disabled])': {
      opacity: boxAppearanceVariables.focused.opacity,
    },
    '&[data-clickable]:focus-visible:not([data-disabled])::after': {
      outlineColor: boxAppearanceVariables.focused.borderColor,
      boxShadow: boxAppearanceVariables.focused.shadow,
    },
    '&[data-clickable]:active:not([data-disabled])': {
      opacity: boxAppearanceVariables.pressed.opacity,
    },
    '&[data-clickable]:active:not([data-disabled])::after': {
      outlineColor: boxAppearanceVariables.pressed.borderColor,
      boxShadow: boxAppearanceVariables.pressed.shadow,
    },
    '&[data-disabled]': { opacity: boxAppearanceVariables.disabled.opacity },
    '&[data-disabled]::after': {
      outlineColor: boxAppearanceVariables.disabled.borderColor,
      boxShadow: boxAppearanceVariables.disabled.shadow,
    },
  },
})
