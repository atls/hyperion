import type { TypographyProperties } from '@atls-ui/theme/tokens'

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
  paddingBlock: string
  paddingInline: string
  typography: TypographyProperties
}

export type ButtonShapeName = 'lg' | 'md' | 'sm' | 'xs'

export type ButtonShape = ButtonShapeProperties | string

export type ButtonShapes = Record<ButtonShapeName, ButtonShapeName>
