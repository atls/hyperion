import type { Theme }                 from '@atls-ui/theme'

import type { InputValueAppearances } from './interfaces.js'
export const inputValueAppearances = {
  default: ({ colors: { text } }: Theme): InputValueAppearances => ({
    default: { color: text.secondary },
    hover: { color: text.secondary },
    focused: { color: text.secondary },
    disabled: { color: text.muted },
    placeholder: { color: text.placeholder },
  }),
}
