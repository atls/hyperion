import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

const createColorVariables = () => ({
  background: createVar(),
  border: createVar(),
  content: createVar(),
})

export const appearanceVariables = {
  default: createColorVariables(),
  hover: createColorVariables(),
  pressed: createColorVariables(),
  disabled: createColorVariables(),
  focused: createColorVariables(),
} as const

export const appearanceStyles = style({
  background: appearanceVariables.default.background,
  color: appearanceVariables.default.content,
  outlineColor: appearanceVariables.default.border,
  selectors: {
    '&:hover:not(:disabled)': {
      background: appearanceVariables.hover.background,
      color: appearanceVariables.hover.content,
      outlineColor: appearanceVariables.hover.border,
    },
    '&:focus-visible:not(:disabled)': {
      background: appearanceVariables.focused.background,
      color: appearanceVariables.focused.content,
      outlineColor: appearanceVariables.focused.border,
    },
    '&:active:not(:disabled)': {
      background: appearanceVariables.pressed.background,
      color: appearanceVariables.pressed.content,
      outlineColor: appearanceVariables.pressed.border,
    },
    '&:disabled': {
      background: appearanceVariables.disabled.background,
      color: appearanceVariables.disabled.content,
      outlineColor: appearanceVariables.disabled.border,
    },
  },
})
