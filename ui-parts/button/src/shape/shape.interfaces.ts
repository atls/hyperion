export type ButtonShapeType = 'rectangle' | 'square' | 'circle'

export interface ButtonShapeRoundingProps {
  rounding?: number | boolean
}

export interface ButtonShapeProps extends ButtonShapeRoundingProps {
  shape?: ButtonShapeType
  fill?: boolean
}

export interface ButtonShapeStyles {
  size: number
  fontFamily?: string | Function
  fontSize?: number | Function
  fontWeight?: string | number | Function
  rounding?: number
  paddingLeft?: number
  paddingRight?: number
  paddingRatio?: number
}
