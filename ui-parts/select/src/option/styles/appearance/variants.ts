import type { Theme }             from '@atls-ui/theme'

import type { OptionAppearances } from './interfaces.js'
export const optionAppearances = {
  default: ({ colors: { surface, action, text } }: Theme): OptionAppearances => ({
    default: { backgroundColor: surface.soft, borderColor: surface.muted, color: text.secondary },
    highlighted: {
      backgroundColor: action.subtle,
      borderColor: action.hover,
      color: text.secondary,
    },
    selected: { backgroundColor: action.base, borderColor: action.pressed, color: text.inverse },
    disabled: { backgroundColor: surface.soft, borderColor: surface.subtle, color: text.muted },
  }),
}
