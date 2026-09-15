import type { Theme }                  from '@atls-ui/theme'

import type { SwitchAppearance }       from './interfaces.js'
import type { SwitchAppearances }      from './interfaces.js'
import type { SwitchAppearanceName }   from './interfaces.js'
import type { SwitchAppearanceValues } from './interfaces.js'

const variants = (theme: Theme): Record<SwitchAppearanceName, SwitchAppearanceValues> => ({
  default: {
    off: {
      default: {
        background: theme.colors.action.subtle,
        border: theme.colors.action.subtle,
        thumb: theme.colors.surface.soft,
      },
      hover: {
        background: theme.colors.text.tertiary,
        border: theme.colors.action.subtle,
        thumb: theme.colors.surface.soft,
      },
      disabled: {
        background: theme.colors.action.subtle,
        border: theme.colors.action.subtle,
        thumb: theme.colors.text.muted,
      },
      focused: {
        background: theme.colors.action.subtle,
        border: theme.colors.action.hover,
        thumb: theme.colors.surface.soft,
      },
    },
    on: {
      default: {
        background: theme.colors.action.base,
        border: theme.colors.action.hover,
        thumb: theme.colors.surface.soft,
      },
      hover: {
        background: theme.colors.action.hover,
        border: theme.colors.action.pressed,
        thumb: theme.colors.surface.soft,
      },
      disabled: {
        background: theme.colors.action.disabled,
        border: theme.colors.action.subtle,
        thumb: theme.colors.text.muted,
      },
      focused: {
        background: theme.colors.action.base,
        border: theme.colors.action.pressed,
        thumb: theme.colors.surface.soft,
      },
    },
  },
})

export const switchAppearances = {
  default: 'default',
} as const satisfies SwitchAppearances

export const resolveSwitchAppearance = (
  appearance: SwitchAppearance,
  theme: Theme
): SwitchAppearanceValues =>
  typeof appearance === 'string' ? variants(theme)[appearance] : appearance
