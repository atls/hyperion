import type { Theme }                 from '@atls-ui/theme'

import type { InputAppearanceStates } from '../../../styles/appearance/interfaces.js'
import type { InputFieldShape }       from '../shape/interfaces.js'

import { HOVER_ELEVATION_SIZES }      from './constants.js'
import { FOCUSED_ELEVATION_SIZES }    from './constants.js'
import { resolveInputAppearance }     from '../../../styles/appearance/variants.js'

export const inputFieldAppearances = {
  default: (theme: Theme, shape: InputFieldShape): InputAppearanceStates => {
    const appearance = resolveInputAppearance('primary', theme, {
      elevation: shape.elevationSize,
    })
    return {
      ...appearance,
      hover: {
        ...appearance.hover,
        shadow: theme.elevations[HOVER_ELEVATION_SIZES[shape.elevationSize]].hover,
      },
      focused: {
        ...appearance.focused,
        shadow: theme.elevations[FOCUSED_ELEVATION_SIZES[shape.elevationSize]].default,
      },
      unfilled: { ...appearance.unfilled, placeholder: theme.colors.text.muted },
    }
  },
}
