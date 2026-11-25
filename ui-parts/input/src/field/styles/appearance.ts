import type { Theme }                 from '@atls-ui/theme'

import type { InputAppearanceStates } from '../../styles/appearance/interfaces.js'
import type { InputFieldShape }       from './shape/interfaces.js'

import { resolveInputAppearance }     from '../../styles/appearance/variants.js'
export const inputFieldAppearances = {
  default: (theme: Theme, shape: InputFieldShape): InputAppearanceStates => {
    const appearance = resolveInputAppearance('primary', theme, {
      elevation: shape.elevationSize,
    })
    return {
      ...appearance,
      unfilled: { ...appearance.unfilled, placeholder: theme.colors.text.muted },
    }
  },
}
