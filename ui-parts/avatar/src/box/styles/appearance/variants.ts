import type { Theme }         from '@atls-ui/theme'

import type { BoxShape }      from '../shape/interfaces.js'
import type { BoxAppearance } from './interfaces.js'

import { opacity }            from '@atls-ui/theme/tokens'

import { DISABLED_OPACITY }   from './constants.js'
export const boxAppearances = {
  default: (theme: Theme, size: BoxShape['elevationSize']): BoxAppearance => {
    const elevation = theme.elevations[size]
    const borderColor = theme.colors.main.transparent
    const visible = String(opacity.full)
    return {
      default: { borderColor, shadow: elevation.default, opacity: visible },
      hover: { borderColor, shadow: elevation.hover, opacity: visible },
      focused: { borderColor: theme.colors.action.base, shadow: elevation.hover, opacity: visible },
      pressed: { borderColor, shadow: elevation.pressed, opacity: visible },
      disabled: { borderColor, shadow: elevation.disabled, opacity: String(DISABLED_OPACITY) },
    }
  },
}
