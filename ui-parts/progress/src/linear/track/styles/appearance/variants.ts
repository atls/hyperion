import type { Theme }           from '@atls-ui/theme'

import type { TrackAppearance } from './interfaces.js'

export const linearTrackAppearances = {
  primary: (theme: Theme): TrackAppearance => ({ backgroundColor: theme.colors.surface.base }),
  secondary: (theme: Theme): TrackAppearance => ({ backgroundColor: theme.colors.text.secondary }),
}
