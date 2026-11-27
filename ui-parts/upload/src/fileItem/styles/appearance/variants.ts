import type { ButtonAppearanceStates } from '@atls-ui-parts/button'
import type { Theme }                  from '@atls-ui/theme'

import type { FileItemAppearance }     from './interfaces.js'

import { linearProgressAppearances }   from '@atls-ui-parts/progress'

import { nameAppearances }             from '../../name/styles/appearance/variants.js'
const removeAppearance = (theme: Theme, color: string): ButtonAppearanceStates => {
  const colors = {
    background: theme.colors.main.transparent,
    border: theme.colors.main.transparent,
    content: color,
  }
  return {
    default: colors,
    hover: colors,
    pressed: colors,
    focused: { ...colors, border: theme.colors.action.hover },
    disabled: { ...colors, content: theme.colors.text.muted },
  }
}
export const fileItemAppearances = {
  default: (theme: Theme): FileItemAppearance => ({
    name: nameAppearances.default(theme),
    remove: {
      loading: removeAppearance(theme, theme.colors.text.primary),
      uploaded: removeAppearance(theme, theme.colors.text.primary),
      error: removeAppearance(theme, theme.colors.status.error),
    },
    progress: linearProgressAppearances.primary(theme),
  }),
}
