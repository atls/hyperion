import type { Theme }                 from '@atls-ui/theme'

import type { InputAppearance }       from './interfaces.js'
import type { InputAppearanceName }   from './interfaces.js'
import type { InputAppearanceStates } from './interfaces.js'
import type { InputAppearances }      from './interfaces.js'

const variants = (theme: Theme): Record<InputAppearanceName, InputAppearanceStates> => ({
  primary: {
    unfilled: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.disabled,
      content: theme.colors.text.tertiary,
      elevation: 'none',
    },
    filled: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.disabled,
      content: theme.colors.text.secondary,
      elevation: 'pressed',
    },
    hover: {
      background: theme.colors.action.disabled,
      border: theme.colors.action.hover,
      content: theme.colors.text.secondary,
      elevation: 'hover',
    },
    focused: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.pressed,
      content: theme.colors.text.secondary,
      elevation: 'default',
    },
    disabled: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.subtle,
      content: theme.colors.text.muted,
      elevation: 'none',
    },
    error: {
      background: theme.colors.action.subtle,
      border: theme.colors.status.error,
      content: theme.colors.status.error,
      elevation: 'default',
    },
  },
  secondary: {
    unfilled: {
      background: 'transparent',
      border: theme.colors.action.disabled,
      content: theme.colors.text.tertiary,
      elevation: 'none',
    },
    filled: {
      background: 'transparent',
      border: theme.colors.action.disabled,
      content: theme.colors.text.secondary,
      elevation: 'none',
    },
    hover: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.pressed,
      content: theme.colors.text.secondary,
      elevation: 'none',
    },
    focused: {
      background: 'transparent',
      border: theme.colors.action.pressed,
      content: theme.colors.text.secondary,
      elevation: 'none',
    },
    disabled: {
      background: 'transparent',
      border: theme.colors.action.subtle,
      content: theme.colors.text.muted,
      elevation: 'none',
    },
    error: {
      background: 'transparent',
      border: theme.colors.status.error,
      content: theme.colors.status.error,
      elevation: 'none',
    },
  },
})

export const inputAppearances = {
  primary: 'primary',
  secondary: 'secondary',
} as const satisfies InputAppearances

export const resolveInputAppearance = (
  appearance: InputAppearance,
  theme: Theme
): InputAppearanceStates =>
  typeof appearance === 'string' ? variants(theme)[appearance] : appearance
