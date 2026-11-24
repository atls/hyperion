import type { Theme }              from '@atls-ui/theme'

import type { TriggerShape }       from '../shape/interfaces.js'
import type { TriggerAppearances } from './interfaces.js'
export const triggerAppearances = {
  default: (theme: Theme, shape: TriggerShape): TriggerAppearances => {
    const { action } = theme.colors
    const elevation = theme.elevations[shape.elevationSize]
    return {
      default: {
        backgroundColor: action.subtle,
        borderColor: action.disabled,
        shadow: elevation.pressed,
      },
      hover: {
        backgroundColor: action.disabled,
        borderColor: action.hover,
        shadow: elevation.hover,
      },
      focused: {
        backgroundColor: action.subtle,
        borderColor: action.pressed,
        shadow: elevation.default,
      },
      disabled: {
        backgroundColor: action.subtle,
        borderColor: action.subtle,
        shadow: elevation.disabled,
      },
    }
  },
}
