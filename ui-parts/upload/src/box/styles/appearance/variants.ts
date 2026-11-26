import type { Theme }             from '@atls-ui/theme'

import type { UploadVisualState } from '../../../states.js'
import type { BoxAppearance }     from './interfaces.js'
export const boxAppearances = {
  default: (theme: Theme): Record<UploadVisualState, BoxAppearance> => ({
    default: {
      backgroundColor: theme.colors.surface.subtle,
      borderColor: theme.colors.action.base,
      shadow: theme.elevations.xs.default,
    },
    hover: {
      backgroundColor: theme.colors.surface.subtle,
      borderColor: theme.colors.action.hover,
      shadow: theme.elevations.xs.hover,
    },
    loading: {
      backgroundColor: theme.colors.surface.subtle,
      borderColor: theme.colors.action.base,
      shadow: 'none',
    },
    error: {
      backgroundColor: theme.colors.surface.subtle,
      borderColor: theme.colors.status.error,
      shadow: 'none',
    },
  }),
}
