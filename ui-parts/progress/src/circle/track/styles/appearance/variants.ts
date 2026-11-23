import type { Theme }           from '@atls-ui/theme'

import type { TrackAppearance } from './interfaces.js'

export const trackAppearances = {
  default: (theme: Theme): TrackAppearance => ({ color: theme.colors.main.transparent }),
}
