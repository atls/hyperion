import type { Theme }           from '@atls-ui/theme'

import type { LabelAppearance } from './interfaces.js'

export const labelAppearances = {
  primary: (theme: Theme): LabelAppearance => ({ color: theme.colors.text.primary }),
  secondary: (theme: Theme): LabelAppearance => ({ color: theme.colors.text.inverse }),
}
