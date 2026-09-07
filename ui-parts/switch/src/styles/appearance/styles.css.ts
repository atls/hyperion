import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

const createColorVariables = () => ({
  background: createVar(),
  border: createVar(),
  thumb: createVar(),
})

export const appearanceVariables = {
  default: createColorVariables(),
  hover: createColorVariables(),
  disabled: createColorVariables(),
  focused: createColorVariables(),
} as const

export const appearanceStyles = style({
  background: appearanceVariables.default.background,
  borderColor: appearanceVariables.default.border,
  color: appearanceVariables.default.thumb,
  selectors: {
    '&:hover:not(:disabled)': {
      background: appearanceVariables.hover.background,
      borderColor: appearanceVariables.hover.border,
      color: appearanceVariables.hover.thumb,
    },
    '&:focus-visible:not(:disabled)': {
      background: appearanceVariables.focused.background,
      borderColor: appearanceVariables.focused.border,
      color: appearanceVariables.focused.thumb,
    },
    '&:disabled': {
      background: appearanceVariables.disabled.background,
      borderColor: appearanceVariables.disabled.border,
      color: appearanceVariables.disabled.thumb,
    },
  },
})
