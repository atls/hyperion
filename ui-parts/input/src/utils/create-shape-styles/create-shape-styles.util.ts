import { style }            from '@vanilla-extract/css'

import { InputShapeStyles } from './create-shape-styles.interfaces.js'

export const createShapeStyles = ({
  size,
  borderWidth = 1,
  fontFamily,
  fontSize,
  fontWeight,
  paddingLeft,
  paddingRight,
  paddingRatio = 0.5,
  rounding = 0,
}: InputShapeStyles) =>
  style({
    height: size,
    borderWidth,
    fontSize,
    fontWeight,
    fontFamily,
    paddingLeft: paddingLeft ?? Number(size) * paddingRatio,
    paddingRight: paddingRight ?? Number(size) * paddingRatio,
    borderRadius: rounding,
  })
