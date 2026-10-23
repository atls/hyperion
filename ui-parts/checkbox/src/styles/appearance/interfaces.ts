import type { BoxAppearance }   from '../../box/styles/appearance/interfaces.js'
import type { CheckAppearance } from '../../check/appearance/interfaces.js'
import type { LabelAppearance } from '../../label/appearance/interfaces.js'

export type CheckboxVisualState = 'default' | 'disabled' | 'focused' | 'hover'

export interface CheckboxAppearanceStates {
  box: Record<CheckboxVisualState, BoxAppearance>
  check: Record<CheckboxVisualState, CheckAppearance>
  label: Record<CheckboxVisualState, LabelAppearance>
}

export interface CheckboxAppearance {
  checked: CheckboxAppearanceStates
  indeterminate?: CheckboxAppearanceStates
  unchecked: CheckboxAppearanceStates
}
