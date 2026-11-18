import type { Theme }          from '@atls-ui/theme'

import type { IconAppearance } from './interfaces.js'
export const iconAppearances = {
  default: (theme: Theme): IconAppearance => ({
    default: { color: theme.colors.action.base },
    hover: { color: theme.colors.action.hover },
    focused: { color: theme.colors.action.hover },
    pressed: { color: theme.colors.action.pressed },
    disabled: { color: theme.colors.action.disabled },
  }),
}
