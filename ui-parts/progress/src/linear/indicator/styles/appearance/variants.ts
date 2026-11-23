import type { Theme }               from '@atls-ui/theme'

import type { IndicatorAppearance } from './interfaces.js'

export const linearIndicatorAppearances = {
  primary: (theme: Theme): IndicatorAppearance => ({
    background: `linear-gradient(to right, ${theme.colors.action.base}, ${theme.colors.action.pressed})`,
  }),
  secondary: (theme: Theme): IndicatorAppearance => ({
    background: `linear-gradient(to right, ${theme.colors.text.muted}, ${theme.colors.text.tertiary})`,
  }),
}
