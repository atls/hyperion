import type { InputAppearanceStates } from '@atls-ui-parts/input'

import type { TriggerAppearance }     from './interfaces.js'
import type { TriggerAppearances }    from './interfaces.js'
const fieldAppearance = (value: TriggerAppearance) => ({
  background: value.backgroundColor,
  border: value.borderColor,
  shadow: value.shadow,
  content: 'inherit',
  placeholder: 'inherit',
})
export const resolveFieldAppearance = (appearance: TriggerAppearances): InputAppearanceStates => ({
  unfilled: fieldAppearance(appearance.default),
  filled: fieldAppearance(appearance.default),
  hover: fieldAppearance(appearance.hover),
  focused: fieldAppearance(appearance.focused),
  disabled: fieldAppearance(appearance.disabled),
  error: fieldAppearance(appearance.default),
})
