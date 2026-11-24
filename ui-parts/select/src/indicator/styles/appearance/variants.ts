import type { Theme }                from '@atls-ui/theme'

import type { IndicatorAppearances } from './interfaces.js'
export const indicatorAppearances = {
  default: ({ colors: { text } }: Theme): IndicatorAppearances => ({
    default: { color: text.secondary },
    hover: { color: text.secondary },
    focused: { color: text.secondary },
    disabled: { color: text.muted },
  }),
}
