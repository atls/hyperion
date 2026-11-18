import type { Theme }         from '@atls-ui/theme'

import type { BoxAppearance } from './interfaces.js'

import { progressShadow }     from '../../../../shadow.js'

export const boxAppearances = {
  primary: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.surface.base,
    shadow: progressShadow(theme),
  }),
  secondary: (theme: Theme): BoxAppearance => ({
    backgroundColor: theme.colors.text.secondary,
    shadow: progressShadow(theme),
  }),
}
