import type { Theme }            from '@atls-ui/theme'

import type { ValueAppearances } from './interfaces.js'
export const valueAppearances = {
  default: ({ colors: { text } }: Theme): ValueAppearances => ({
    default: { color: text.secondary },
    hover: { color: text.secondary },
    focused: { color: text.secondary },
    disabled: { color: text.muted },
    placeholder: { color: text.placeholder },
  }),
}
