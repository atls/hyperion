import type { Theme }          from '@atls-ui/theme'

import type { TextAppearance } from './interfaces.js'

export const textAppearances: Record<'default', (theme: Theme) => TextAppearance> = {
  default: (theme) => ({ color: theme.colors.text.primary }),
}
