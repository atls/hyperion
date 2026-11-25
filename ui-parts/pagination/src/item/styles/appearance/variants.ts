import type { Theme }           from '@atls-ui/theme'

import type { ItemAppearances } from './interfaces.js'

import { GRADIENT_DIRECTION }   from './constants.js'
import { HOVER_GRADIENT_STOP }  from './constants.js'

export const itemAppearances = {
  default: (theme: Theme): ItemAppearances => {
    const selected = `linear-gradient(${GRADIENT_DIRECTION}, ${theme.colors.action.base}, ${theme.colors.action.pressed})`
    return {
      selected: {
        default: { background: selected, borderColor: theme.colors.action.base },
        hover: {
          background: `linear-gradient(${GRADIENT_DIRECTION}, ${theme.colors.action.hover} ${HOVER_GRADIENT_STOP}, ${theme.colors.text.secondary})`,
          borderColor: theme.colors.action.pressed,
        },
        focused: { background: selected, borderColor: theme.colors.action.pressed },
        disabled: {
          background: `linear-gradient(${GRADIENT_DIRECTION}, ${theme.colors.action.subtle}, ${theme.colors.action.disabled})`,
          borderColor: theme.colors.action.disabled,
        },
      },
      unselected: {
        default: {
          background: theme.colors.action.subtle,
          borderColor: theme.colors.action.base,
        },
        hover: {
          background: theme.colors.action.disabled,
          borderColor: theme.colors.action.hover,
        },
        focused: {
          background: theme.colors.action.subtle,
          borderColor: theme.colors.action.pressed,
        },
        disabled: {
          background: theme.colors.action.subtle,
          borderColor: theme.colors.action.subtle,
        },
      },
    }
  },
}
