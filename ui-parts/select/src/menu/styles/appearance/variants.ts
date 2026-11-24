import type { Theme }          from '@atls-ui/theme'

import type { MenuAppearance } from './interfaces.js'
export const menuAppearances = {
  default: (theme: Theme): MenuAppearance => ({
    backgroundColor: theme.colors.surface.soft,
    shadow: theme.elevations.xs.default,
  }),
}
