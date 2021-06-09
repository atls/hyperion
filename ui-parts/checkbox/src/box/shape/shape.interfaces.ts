export type BoxPatternType = 'square' | 'circle'

export interface BoxShapeStyles {
  size: number
  borderWidth?: number | Function
  borderRadius?: number | string | Function
}

export interface BoxShapeProps {
  shape?: BoxPatternType
}
