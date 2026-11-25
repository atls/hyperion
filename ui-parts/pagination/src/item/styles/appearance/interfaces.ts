export interface ItemAppearance {
  background: string
  borderColor: string
}

export interface ItemAppearanceStates {
  default: ItemAppearance
  hover: ItemAppearance
  focused: ItemAppearance
  disabled: ItemAppearance
}

export interface ItemAppearances {
  selected: ItemAppearanceStates
  unselected: ItemAppearanceStates
}
