export interface InputShapePaddingLeftProps {
  paddingLeft?: number
}

export interface InputShapePaddingRightProps {
  paddingRight?: number
}

export interface InputShapeRoudingProps {
  rounding?: number | boolean
}

export interface InputShapeProps
  extends InputShapeRoudingProps,
    InputShapePaddingLeftProps,
    InputShapePaddingRightProps {}

export interface InputShapeStyles {
  size: number
  borderWidth?: number | string
  fontFamily?: string | Function
  fontSize?: number | Function
  fontWeight?: string | number | Function
  rounding?: number
  paddingLeft?: number
  paddingRight?: number
  paddingRatio?: number
}
