import type { Theme }                 from '@atls-ui/theme'

import type { InputShape }            from '../shape/interfaces.js'
import type { InputAppearance }       from './interfaces.js'
import type { InputAppearanceName }   from './interfaces.js'
import type { InputAppearanceStates } from './interfaces.js'
import type { InputAppearances }      from './interfaces.js'

const variants = (
  theme: Theme,
  shape: InputShape
): Record<InputAppearanceName, InputAppearanceStates> => ({
  primary: {
    unfilled: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.disabled,
      content: theme.colors.text.tertiary,
      placeholder: theme.colors.text.placeholder,
      shadow: 'none',
    },
    filled: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.disabled,
      content: theme.colors.text.secondary,
      placeholder: theme.colors.text.placeholder,
      shadow: theme.elevations[shape.elevation].pressed,
    },
    hover: {
      background: theme.colors.action.disabled,
      border: theme.colors.action.hover,
      content: theme.colors.text.secondary,
      placeholder: theme.colors.text.placeholderHover,
      shadow: theme.elevations[shape.elevation].hover,
    },
    focused: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.pressed,
      content: theme.colors.text.secondary,
      placeholder: theme.colors.text.placeholder,
      shadow: theme.elevations[shape.elevation].default,
    },
    disabled: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.subtle,
      content: theme.colors.text.muted,
      placeholder: theme.colors.text.muted,
      shadow: 'none',
    },
    error: {
      background: theme.colors.action.subtle,
      border: theme.colors.status.error,
      content: theme.colors.status.error,
      placeholder: theme.colors.text.placeholder,
      shadow: theme.elevations[shape.elevation].default,
    },
  },
  secondary: {
    unfilled: {
      background: 'transparent',
      border: theme.colors.action.disabled,
      content: theme.colors.text.tertiary,
      placeholder: theme.colors.text.placeholder,
      shadow: 'none',
    },
    filled: {
      background: 'transparent',
      border: theme.colors.action.disabled,
      content: theme.colors.text.secondary,
      placeholder: theme.colors.text.placeholder,
      shadow: 'none',
    },
    hover: {
      background: theme.colors.action.subtle,
      border: theme.colors.action.pressed,
      content: theme.colors.text.secondary,
      placeholder: theme.colors.text.placeholder,
      shadow: 'none',
    },
    focused: {
      background: 'transparent',
      border: theme.colors.action.pressed,
      content: theme.colors.text.secondary,
      placeholder: theme.colors.text.placeholder,
      shadow: 'none',
    },
    disabled: {
      background: 'transparent',
      border: theme.colors.action.subtle,
      content: theme.colors.text.muted,
      placeholder: theme.colors.text.muted,
      shadow: 'none',
    },
    error: {
      background: 'transparent',
      border: theme.colors.status.error,
      content: theme.colors.status.error,
      placeholder: theme.colors.text.placeholder,
      shadow: 'none',
    },
  },
})

export const inputAppearances = {
  primary: 'primary',
  secondary: 'secondary',
} as const satisfies InputAppearances

export const resolveInputAppearance = (
  appearance: InputAppearance,
  theme: Theme,
  shape: InputShape
): InputAppearanceStates =>
  typeof appearance === 'string' ? variants(theme, shape)[appearance] : appearance
