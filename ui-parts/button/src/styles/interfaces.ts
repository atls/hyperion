import type { TypographyProperties } from '@atls-ui/theme/tokens'

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

export interface ButtonAppearancePreset {
  readonly preset: ButtonAppearanceName
}

export type ButtonAppearance = ButtonAppearancePreset | ButtonAppearanceStates

export interface ButtonElevations {
  default: string
  hover: string
  pressed: string
  disabled: string
  focused: string
}

export interface ButtonShapeProperties {
  addonSize: string
  borderRadius: string
  borderStyle: string
  borderWidth: string
  elevations: ButtonElevations
  gap: string
  minHeight: string
  paddingBlock: string
  paddingInline: string
  typography: TypographyProperties
}

export type ButtonShapeName = 'lg' | 'md' | 'sm' | 'xs'

export interface ButtonShapePreset {
  readonly preset: ButtonShapeName
}

export type ButtonShape = ButtonShapePreset | ButtonShapeProperties | string

export type ButtonAppearances = Record<ButtonAppearanceName, ButtonAppearancePreset>

export type ButtonShapes = Record<ButtonShapeName, ButtonShapePreset>
