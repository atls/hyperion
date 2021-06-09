export type AvatarShapeType = 'square' | 'circle'

export interface AvatarShapeStyles {
  size: number
  borderRadius?: number | Function
  borderWidth?: number | Function
  padding?: number | Function
  fontFamily?: string | Function
  fontSize?: number | Function
  fontWeight?: string | number | Function
}

export interface AvatarShapeProps {
  shape?: AvatarShapeType
}
