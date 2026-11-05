import type { Theme }          from '@atls-ui/theme'

import type { CardShape }      from '../shape/interfaces.js'
import type { CardAppearance } from './interfaces.js'

export const cardAppearances = {
  elevated: (theme, elevationSize) => ({
    default: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.main.transparent,
      shadow: theme.elevations[elevationSize].default,
    },
    hover: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.main.transparent,
      shadow: theme.elevations[elevationSize].hover,
    },
    pressed: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.main.transparent,
      shadow: theme.elevations[elevationSize].pressed,
    },
    focused: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.action.subtle,
      shadow: theme.elevations[elevationSize].default,
    },
    disabled: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.main.transparent,
      shadow: theme.elevations[elevationSize].disabled,
    },
  }),
  outlined: (theme) => ({
    default: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.action.base,
      shadow: 'none',
    },
    hover: {
      backgroundColor: theme.colors.surface.subtle,
      borderColor: theme.colors.action.hover,
      shadow: 'none',
    },
    pressed: {
      backgroundColor: theme.colors.surface.base,
      borderColor: theme.colors.action.pressed,
      shadow: 'none',
    },
    focused: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.action.hover,
      shadow: 'none',
    },
    disabled: {
      backgroundColor: theme.colors.surface.soft,
      borderColor: theme.colors.action.subtle,
      shadow: 'none',
    },
  }),
  filled: (theme, elevationSize) => ({
    default: {
      backgroundColor: theme.colors.action.subtle,
      borderColor: theme.colors.main.transparent,
      shadow: 'none',
    },
    hover: {
      backgroundColor: theme.colors.action.subtle,
      borderColor: theme.colors.action.hover,
      shadow: theme.elevations[elevationSize].hover,
    },
    pressed: {
      backgroundColor: theme.colors.action.disabled,
      borderColor: theme.colors.action.pressed,
      shadow: 'none',
    },
    focused: {
      backgroundColor: theme.colors.action.subtle,
      borderColor: theme.colors.action.pressed,
      shadow: 'none',
    },
    disabled: {
      backgroundColor: theme.colors.action.subtle,
      borderColor: theme.colors.action.subtle,
      shadow: 'none',
    },
  }),
} satisfies Record<
  string,
  (theme: Theme, elevationSize: CardShape['elevationSize']) => CardAppearance
>
