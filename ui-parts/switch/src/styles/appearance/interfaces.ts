export interface SwitchColors {
  background: string
  border: string
  thumb: string
}

export interface SwitchAppearanceStates {
  default: SwitchColors
  hover: SwitchColors
  disabled: SwitchColors
  focused: SwitchColors
}

export interface SwitchAppearanceValues {
  off: SwitchAppearanceStates
  on: SwitchAppearanceStates
}

export type SwitchAppearanceName = 'default'

export type SwitchAppearance = SwitchAppearanceName | SwitchAppearanceValues

export type SwitchAppearances = Record<SwitchAppearanceName, SwitchAppearanceName>
