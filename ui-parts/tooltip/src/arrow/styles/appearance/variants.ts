import type { Theme }           from '@atls-ui/theme'

import type { ArrowAppearance } from './interfaces.js'

export const arrowAppearances: Record<'default', (theme: Theme) => ArrowAppearance> = {
  default: (theme) => ({ color: theme.colors.surface.soft }),
}
