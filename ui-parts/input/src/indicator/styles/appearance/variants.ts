import type { Theme }                     from '@atls-ui/theme'

import type { InputIndicatorAppearances } from './interfaces.js'
export const inputIndicatorAppearances = {
  default: ({ colors: { text } }: Theme): InputIndicatorAppearances => ({
    default: { color: text.secondary },
    hover: { color: text.secondary },
    focused: { color: text.secondary },
    disabled: { color: text.muted },
  }),
}
