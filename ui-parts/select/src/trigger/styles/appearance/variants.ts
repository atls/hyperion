import type { Theme }              from '@atls-ui/theme'

import type { TriggerShape }       from '../shape/interfaces.js'
import type { TriggerAppearances } from './interfaces.js'

import { inputFieldAppearances }   from '@atls-ui-parts/input'
export const triggerAppearances = {
  default: (theme: Theme, shape: TriggerShape): TriggerAppearances => {
    const field = inputFieldAppearances.default(theme, shape)
    return {
      default: {
        backgroundColor: field.filled.background,
        borderColor: field.filled.border,
        shadow: field.filled.shadow,
      },
      hover: {
        backgroundColor: field.hover.background,
        borderColor: field.hover.border,
        shadow: field.hover.shadow,
      },
      focused: {
        backgroundColor: field.focused.background,
        borderColor: field.focused.border,
        shadow: field.focused.shadow,
      },
      disabled: {
        backgroundColor: field.disabled.background,
        borderColor: field.disabled.border,
        shadow: field.disabled.shadow,
      },
    }
  },
}
