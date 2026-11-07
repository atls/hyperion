import type { Theme }         from '@atls-ui/theme'

import type { BoxAppearance } from './interfaces.js'

const boxShadow = (theme: Theme): string =>
  `0 0 0.5px 0.3px ${theme.colors.action.subtle}, 0 0 0.2px 0.2px ${theme.colors.elevation.sm}`

export const boxAppearances = {
  primary: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.surface.base,
    shadow: boxShadow(theme),
  }),
  secondary: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.text.secondary,
    shadow: boxShadow(theme),
  }),
}
