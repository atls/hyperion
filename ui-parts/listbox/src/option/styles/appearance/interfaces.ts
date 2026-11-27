export interface OptionAppearance {
  backgroundColor: string
  borderColor: string
  color: string
}

export interface OptionAppearances {
  default: OptionAppearance
  hover: OptionAppearance
  active: OptionAppearance
  disabled: OptionAppearance
  focused: OptionAppearance
}
