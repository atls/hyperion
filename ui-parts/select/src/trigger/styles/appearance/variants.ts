import type { Theme }              from '@atls-ui/theme'

import type { TriggerShape }       from '../shape/interfaces.js'
import type { TriggerAppearances } from './interfaces.js'

import { HOVER_ELEVATION_SIZES }   from './constants.js'
import { FOCUSED_ELEVATION_SIZES } from './constants.js'
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
        shadow: theme.elevations[HOVER_ELEVATION_SIZES[shape.elevationSize]].hover,
      },
      focused: {
        backgroundColor: action.subtle,
        borderColor: action.pressed,
        shadow: theme.elevations[FOCUSED_ELEVATION_SIZES[shape.elevationSize]].default,
      },
      disabled: {
        backgroundColor: action.subtle,
        borderColor: action.subtle,
        shadow: 'none',
      },
    }
  },
}
