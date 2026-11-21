export interface TextAppearanceValues {
  color: string
  textDecorationLine: string
}
export interface TextAppearance {
  default: TextAppearanceValues
  hover: TextAppearanceValues
  pressed: TextAppearanceValues
  focused: TextAppearanceValues
  disabled: TextAppearanceValues
}
