export interface CardAppearanceState {
  backgroundColor: string
  borderColor: string
  shadow: string
}

export interface CardAppearance {
  default: CardAppearanceState
  disabled: CardAppearanceState
  focused: CardAppearanceState
  hover: CardAppearanceState
  pressed: CardAppearanceState
}
