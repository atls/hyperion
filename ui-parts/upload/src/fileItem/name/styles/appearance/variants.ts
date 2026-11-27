import type { Theme }          from '@atls-ui/theme'

import type { FileItemState }  from '../../../states.js'
import type { NameAppearance } from './interfaces.js'
export const nameAppearances = {
  default: (theme: Theme): Record<FileItemState, NameAppearance> => ({
    loading: { color: theme.colors.text.primary },
    uploaded: { color: theme.colors.text.primary },
    error: { color: theme.colors.status.error },
  }),
}
