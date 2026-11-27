import type { Theme }             from '@atls-ui/theme'

import type { ListboxAppearance } from './interfaces.js'
export const listboxAppearances = {
  default: (theme: Theme): ListboxAppearance => ({
    backgroundColor: theme.colors.surface.soft,
    shadow: theme.elevations.xs.default,
  }),
}
