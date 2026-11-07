import type { Theme }               from '@atls-ui/theme'

import type { IndicatorAppearance } from './interfaces.js'

export const indicatorAppearances = {
  primary: (theme: Theme): IndicatorAppearance => ({
    color: theme.colors.action.base,
    endColor: theme.colors.action.pressed,
  }),
  secondary: (theme: Theme): IndicatorAppearance => ({
    color: theme.colors.text.muted,
    endColor: theme.colors.text.tertiary,
  }),
}
