import type { Theme }             from '@atls-ui/theme'

import type { UploadVisualState } from '../../../states.js'
import type { IconAppearance }    from './interfaces.js'
export const iconAppearances = {
  default: (theme: Theme): Record<UploadVisualState, IconAppearance> => ({
    default: { color: theme.colors.text.secondary },
    hover: { color: theme.colors.text.secondary },
    loading: { color: theme.colors.text.secondary },
    error: { color: theme.colors.status.error },
  }),
}
