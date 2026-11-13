import type { Theme }              from '@atls-ui/theme'

import type { FallbackAppearance } from './interfaces.js'
export const fallbackAppearances = {
  default: (theme: Theme): FallbackAppearance => {
    const { action, text } = theme.colors
    const color = text.inverse
    return {
      default: { backgroundColor: action.base, color },
      hover: { backgroundColor: action.hover, color },
      focused: { backgroundColor: action.base, color },
      pressed: { backgroundColor: action.pressed, color },
      disabled: { backgroundColor: action.disabled, color },
    }
  },
}
