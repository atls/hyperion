export interface BoxAppearanceValues {
  borderColor: string
  shadow: string
  opacity: string
}
export interface BoxAppearance {
  default: BoxAppearanceValues
  hover: BoxAppearanceValues
  focused: BoxAppearanceValues
  pressed: BoxAppearanceValues
  disabled: BoxAppearanceValues
}
