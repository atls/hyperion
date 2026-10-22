import type { Theme }                    from '@atls-ui/theme'
import type { CSSProperties }            from 'react'

import type { CheckboxAppearance }       from '../../../checkbox.interfaces.js'
import type { CheckboxAppearanceState }  from '../../../checkbox.interfaces.js'
import type { CheckboxAppearanceStates } from '../../../checkbox.interfaces.js'
import type { CheckboxSelectionState }   from '../../../checkbox.interfaces.js'
import type { BoxShape }                 from '../shape/interfaces.js'

const createAppearanceState = (
  backgroundColor: string,
  borderColor: string,
  markColor: string,
  shadow: CSSProperties['boxShadow']
): CheckboxAppearanceState => ({
  backgroundColor,
  borderColor,
  markColor,
  shadow: shadow ?? 'none',
})

export const createDefaultAppearance = (
  theme: Theme,
  elevationSize: BoxShape['elevationSize']
): CheckboxAppearance => {
  const { action, surface, text } = theme.colors
  const elevation = theme.elevations[elevationSize]

  return {
    checked: {
      default: createAppearanceState(action.base, action.base, text.inverse, elevation.default),
      hover: createAppearanceState(action.hover, action.pressed, text.inverse, elevation.hover),
      disabled: createAppearanceState(
        action.disabled,
        action.subtle,
        text.muted,
        elevation.disabled
      ),
      focused: createAppearanceState(action.base, action.pressed, text.inverse, elevation.hover),
    },
    unchecked: {
      default: createAppearanceState(surface.base, action.base, 'transparent', elevation.default),
      hover: createAppearanceState(action.subtle, action.pressed, 'transparent', elevation.hover),
      disabled: createAppearanceState(
        surface.base,
        action.subtle,
        'transparent',
        elevation.disabled
      ),
      focused: createAppearanceState(surface.base, action.pressed, 'transparent', elevation.hover),
    },
  }
}

export const resolveCheckboxAppearance = (
  appearance: CheckboxAppearance,
  selectionState: CheckboxSelectionState
): CheckboxAppearanceStates =>
  selectionState === 'indeterminate'
    ? (appearance.indeterminate ?? appearance.checked)
    : appearance[selectionState]
