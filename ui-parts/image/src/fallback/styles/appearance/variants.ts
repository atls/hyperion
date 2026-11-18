import type { Theme }              from '@atls-ui/theme'

import type { FallbackAppearance } from './interfaces.js'
export const fallbackAppearances = {
  default: (theme: Theme): FallbackAppearance => ({
    backgroundColor: theme.colors.action.subtle,
    color: theme.colors.text.primary,
    errorColor: theme.colors.status.error,
  }),
}
