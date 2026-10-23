export type CheckboxVisualState = 'default' | 'disabled' | 'focused' | 'hover'

export interface CheckboxAppearanceValues {
  backgroundColor: string
  borderColor: string
  markColor: string
  shadow: string
}

export type CheckboxAppearanceStates = Record<CheckboxVisualState, CheckboxAppearanceValues>

export interface CheckboxAppearance {
  checked: CheckboxAppearanceStates
  indeterminate?: CheckboxAppearanceStates
  unchecked: CheckboxAppearanceStates
}
