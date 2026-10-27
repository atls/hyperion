import type { Theme }                 from '@atls-ui/theme'

import type { PlaceholderAppearance } from './interfaces.js'

export const placeholderAppearances = {
  default: (theme: Theme): PlaceholderAppearance => ({
    backgroundColor: theme.colors.main.transparent,
    descriptionColor: theme.colors.text.secondary,
    iconColor: theme.colors.text.primary,
    titleColor: theme.colors.text.primary,
  }),
}
