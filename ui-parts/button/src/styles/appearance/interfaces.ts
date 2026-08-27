export interface ButtonColors {
  background: string
  border: string
  content: string
}

export interface ButtonAppearanceStates {
  default: ButtonColors
  hover: ButtonColors
  pressed: ButtonColors
  disabled: ButtonColors
  focused: ButtonColors
}

export type ButtonAppearanceName = 'ghost' | 'primary' | 'secondary'

export type ButtonAppearance = ButtonAppearanceName | ButtonAppearanceStates

export type ButtonAppearances = Record<ButtonAppearanceName, ButtonAppearanceName>
