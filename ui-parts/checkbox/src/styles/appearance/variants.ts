import type { Theme }              from '@atls-ui/theme'

import type { BoxShape }           from '../../box/styles/shape/interfaces.js'
import type { CheckboxAppearance } from './interfaces.js'

export const checkboxAppearances = {
  default: (theme, elevationSize) => {
    const { action, surface, text } = theme.colors
    const elevation = theme.elevations[elevationSize]

    return {
      checked: {
        box: {
          default: {
            backgroundColor: action.base,
            borderColor: action.base,
            shadow: elevation.default,
          },
          hover: {
            backgroundColor: action.hover,
            borderColor: action.pressed,
            shadow: elevation.hover,
          },
          disabled: {
            backgroundColor: action.disabled,
            borderColor: action.subtle,
            shadow: elevation.disabled,
          },
          focused: {
            backgroundColor: action.base,
            borderColor: action.pressed,
            shadow: elevation.hover,
          },
        },
        check: {
          default: { color: text.inverse },
          hover: { color: text.inverse },
          disabled: { color: text.muted },
          focused: { color: text.inverse },
        },
        label: {
          default: { color: text.primary },
          hover: { color: text.primary },
          disabled: { color: text.muted },
          focused: { color: text.primary },
        },
      },
      unchecked: {
        box: {
          default: {
            backgroundColor: surface.base,
            borderColor: action.base,
            shadow: elevation.default,
          },
          hover: {
            backgroundColor: action.subtle,
            borderColor: action.pressed,
            shadow: elevation.hover,
          },
          disabled: {
            backgroundColor: surface.base,
            borderColor: action.subtle,
            shadow: elevation.disabled,
          },
          focused: {
            backgroundColor: surface.base,
            borderColor: action.pressed,
            shadow: elevation.hover,
          },
        },
        check: {
          default: { color: 'transparent' },
          hover: { color: 'transparent' },
          disabled: { color: 'transparent' },
          focused: { color: 'transparent' },
        },
        label: {
          default: { color: text.primary },
          hover: { color: text.primary },
          disabled: { color: text.muted },
          focused: { color: text.primary },
        },
      },
    }
  },
} satisfies Record<
  string,
  (theme: Theme, elevationSize: BoxShape['elevationSize']) => CheckboxAppearance
>
