import type { Theme }             from '@atls-ui/theme'

import type { OptionAppearances } from './interfaces.js'

export const optionAppearances = {
  default: ({ colors: { surface, action, text } }: Theme): OptionAppearances => ({
    default: { backgroundColor: text.inverse, borderColor: surface.muted, color: text.secondary },
    hover: { backgroundColor: action.subtle, borderColor: action.subtle, color: text.secondary },
    active: { backgroundColor: action.base, borderColor: action.pressed, color: text.inverse },
    disabled: { backgroundColor: text.inverse, borderColor: surface.subtle, color: text.muted },
    focused: { backgroundColor: text.inverse, borderColor: action.hover, color: text.secondary },
  }),
}
