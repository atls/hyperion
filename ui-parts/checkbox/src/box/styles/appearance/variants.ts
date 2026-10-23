import type { Theme }              from '@atls-ui/theme'

import type { BoxShape }           from '../shape/interfaces.js'
import type { CheckboxAppearance } from './interfaces.js'

export const checkboxAppearances = {
  default: (theme, elevationSize) => {
    const { action, surface, text } = theme.colors
    const elevation = theme.elevations[elevationSize]

    return {
      checked: {
        default: {
          backgroundColor: action.base,
          borderColor: action.base,
          markColor: text.inverse,
          shadow: elevation.default,
        },
        hover: {
          backgroundColor: action.hover,
          borderColor: action.pressed,
          markColor: text.inverse,
          shadow: elevation.hover,
        },
        disabled: {
          backgroundColor: action.disabled,
          borderColor: action.subtle,
          markColor: text.muted,
          shadow: elevation.disabled,
        },
        focused: {
          backgroundColor: action.base,
          borderColor: action.pressed,
          markColor: text.inverse,
          shadow: elevation.hover,
        },
      },
      unchecked: {
        default: {
          backgroundColor: surface.base,
          borderColor: action.base,
          markColor: 'transparent',
          shadow: elevation.default,
        },
        hover: {
          backgroundColor: action.subtle,
          borderColor: action.pressed,
          markColor: 'transparent',
          shadow: elevation.hover,
        },
        disabled: {
          backgroundColor: surface.base,
          borderColor: action.subtle,
          markColor: 'transparent',
          shadow: elevation.disabled,
        },
        focused: {
          backgroundColor: surface.base,
          borderColor: action.pressed,
          markColor: 'transparent',
          shadow: elevation.hover,
        },
      },
    }
  },
} satisfies Record<
  string,
  (theme: Theme, elevationSize: BoxShape['elevationSize']) => CheckboxAppearance
>
