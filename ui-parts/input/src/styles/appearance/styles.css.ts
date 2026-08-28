import { createVar } from '@vanilla-extract/css'
import { style }     from '@vanilla-extract/css'

const createStateVariables = () => ({
  background: createVar(),
  border: createVar(),
  content: createVar(),
  shadow: createVar(),
})

export const appearanceVariables = {
  disabled: createStateVariables(),
  error: createStateVariables(),
  filled: createStateVariables(),
  focused: createStateVariables(),
  hover: createStateVariables(),
  unfilled: createStateVariables(),
} as const

export const appearanceStyles = style({
  background: appearanceVariables.unfilled.background,
  borderColor: appearanceVariables.unfilled.border,
  boxShadow: appearanceVariables.unfilled.shadow,
  color: appearanceVariables.unfilled.content,
  selectors: {
    '&:where(:has(input:not(:placeholder-shown))):not([data-disabled="true"]):not([data-error="true"])':
      {
        background: appearanceVariables.filled.background,
        borderColor: appearanceVariables.filled.border,
        boxShadow: appearanceVariables.filled.shadow,
        color: appearanceVariables.filled.content,
      },
    '&:hover:not([data-disabled="true"]):not([data-error="true"])': {
      background: appearanceVariables.hover.background,
      borderColor: appearanceVariables.hover.border,
      boxShadow: appearanceVariables.hover.shadow,
      color: appearanceVariables.hover.content,
    },
    '&:focus-within:not([data-disabled="true"]):not([data-error="true"])': {
      background: appearanceVariables.focused.background,
      borderColor: appearanceVariables.focused.border,
      boxShadow: appearanceVariables.focused.shadow,
      color: appearanceVariables.focused.content,
    },
    '&[data-error="true"]:not([data-disabled="true"])': {
      background: appearanceVariables.error.background,
      borderColor: appearanceVariables.error.border,
      boxShadow: appearanceVariables.error.shadow,
      color: appearanceVariables.error.content,
    },
    '&[data-disabled="true"]': {
      background: appearanceVariables.disabled.background,
      borderColor: appearanceVariables.disabled.border,
      boxShadow: appearanceVariables.disabled.shadow,
      color: appearanceVariables.disabled.content,
    },
  },
})
