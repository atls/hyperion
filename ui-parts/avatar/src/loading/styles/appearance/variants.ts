import type { Theme }                from '@atls-ui/theme'

import type { LoadingAppearance }    from './interfaces.js'

import { circleProgressAppearances } from '@atls-ui-parts/progress'
export const loadingAppearances = {
  default: (theme: Theme): LoadingAppearance => ({
    backgroundColor: theme.colors.elevation.lg,
    progress: circleProgressAppearances.secondary(theme),
  }),
}
