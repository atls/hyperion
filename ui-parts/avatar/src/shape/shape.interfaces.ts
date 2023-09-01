export type AvatarShapeType = 'square' | 'circle'

export interface AvatarShapeStyles {
  size: number
  borderRadius?: number | Function
  borderWidth?: number | Function
  fontFamily?: string | Function
  padding?: number | Function
  fontSize?: number | Function
  fontWeight?: string | number | Function
}

export interface AvatarShapeProps {
  shape?: AvatarShapeType
}
