import type { Theme }           from '@atls-ui/theme'

import type { LabelAppearance } from './interfaces.js'
export const labelAppearances = {
  default: (theme: Theme): LabelAppearance => ({ color: theme.colors.text.secondary }),
}
