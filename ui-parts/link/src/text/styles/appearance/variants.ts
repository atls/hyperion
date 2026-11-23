import type { Theme }          from '@atls-ui/theme'

import type { TextAppearance } from './interfaces.js'
export const textAppearances = {
  standalone: (theme: Theme): TextAppearance => ({
    default: { color: theme.colors.action.base, textDecorationLine: 'none' },
    hover: { color: theme.colors.action.hover, textDecorationLine: 'underline' },
    pressed: { color: theme.colors.action.pressed, textDecorationLine: 'underline' },
    focused: { color: theme.colors.action.hover, textDecorationLine: 'underline' },
    disabled: { color: theme.colors.action.disabled, textDecorationLine: 'none' },
  }),
  inline: (theme: Theme): TextAppearance => ({
    ...textAppearances.standalone(theme),
    default: { color: theme.colors.action.base, textDecorationLine: 'underline' },
  }),
}
