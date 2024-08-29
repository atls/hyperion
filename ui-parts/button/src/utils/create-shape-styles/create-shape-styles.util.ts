import type { ButtonShapeStyles } from './create-shape-styles.interfaces.js'

import { style }                  from '@vanilla-extract/css'

export const createShapeStyles = ({
  size,
  fontFamily,
  fontSize,
  fontWeight,
  paddingLeft,
  paddingRight,
  paddingRatio = 0.5,
  rounding = 0,
}: ButtonShapeStyles): string =>
  style({
    height: size,
    fontSize,
    fontWeight,
    fontFamily,
    paddingLeft: paddingLeft ?? Number(size) * paddingRatio,
    paddingRight: paddingRight ?? Number(size) * paddingRatio,
    borderRadius: rounding,
  })
