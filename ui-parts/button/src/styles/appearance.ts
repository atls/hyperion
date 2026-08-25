import type { Theme }                  from '@atls-ui/theme'

import type { ButtonAppearance }       from './interfaces.js'
import type { ButtonAppearanceStates } from './interfaces.js'
import type { ButtonAppearances }      from './interfaces.js'

const appearances = (theme: Theme): Record<keyof ButtonAppearances, ButtonAppearanceStates> => ({
  primary: {
    default: {
      background: theme.colors.action.base,
      content: theme.colors.text.inverse,
      border: theme.colors.action.base,
    },
    hover: {
      background: theme.colors.action.hover,
      content: theme.colors.text.inverse,
      border: theme.colors.action.hover,
    },
    pressed: {
      background: theme.colors.action.pressed,
      content: theme.colors.text.inverse,
      border: theme.colors.action.pressed,
    },
    disabled: {
      background: theme.colors.action.disabled,
      content: theme.colors.text.muted,
      border: theme.colors.action.subtle,
    },
    focused: {
      background: theme.colors.action.base,
      content: theme.colors.text.inverse,
      border: theme.colors.action.pressed,
    },
  },
  secondary: {
    default: {
      background: theme.colors.action.subtle,
      content: theme.colors.text.secondary,
      border: theme.colors.surface.muted,
    },
    hover: {
      background: theme.colors.action.disabled,
      content: theme.colors.text.secondary,
      border: theme.colors.action.disabled,
    },
    pressed: {
      background: theme.colors.text.secondary,
      content: theme.colors.text.muted,
      border: theme.colors.action.subtle,
    },
    disabled: {
      background: theme.colors.surface.muted,
      content: theme.colors.text.tertiary,
      border: theme.colors.surface.muted,
    },
    focused: {
      background: theme.colors.action.disabled,
      content: theme.colors.text.secondary,
      border: theme.colors.action.hover,
    },
  },
  ghost: {
    default: {
      background: 'transparent',
      content: theme.colors.text.secondary,
      border: 'transparent',
    },
    hover: {
      background: theme.colors.surface.muted,
      content: theme.colors.text.secondary,
      border: theme.colors.surface.muted,
    },
    pressed: {
      background: theme.colors.action.subtle,
      content: theme.colors.text.tertiary,
      border: theme.colors.action.subtle,
    },
    disabled: {
      background: 'transparent',
      content: theme.colors.text.tertiary,
      border: 'transparent',
    },
    focused: {
      background: 'transparent',
      content: theme.colors.text.secondary,
      border: theme.colors.action.disabled,
    },
  },
})

export const buttonAppearances = {
  primary: { preset: 'primary' },
  secondary: { preset: 'secondary' },
  ghost: { preset: 'ghost' },
} as const satisfies ButtonAppearances

export const resolveButtonAppearance = (
  appearance: ButtonAppearance,
  theme: Theme
): ButtonAppearanceStates =>
  'preset' in appearance ? appearances(theme)[appearance.preset] : appearance
