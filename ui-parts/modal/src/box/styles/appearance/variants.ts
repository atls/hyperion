import type { Theme }         from '@atls-ui/theme'

import type { BoxAppearance } from './interfaces.js'

export const boxAppearances = {
  default: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.surface.soft,
    boxShadow: theme.elevations.modal.default,
  }),
}
