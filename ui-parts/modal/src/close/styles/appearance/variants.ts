import type { Theme }           from '@atls-ui/theme'

import type { CloseAppearance } from './interfaces.js'

export const closeAppearances = {
  default: (theme: Theme): CloseAppearance => ({ color: theme.colors.text.primary }),
}
