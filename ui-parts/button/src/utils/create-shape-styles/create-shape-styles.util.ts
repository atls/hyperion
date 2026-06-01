import type { ButtonShapeStyles } from './create-shape-styles.interfaces.js'

import { style }                  from '@vanilla-extract/css'

const getDefaultPadding = (size: number | string, paddingRatio: number): number =>
  typeof size === 'number' ? size * paddingRatio : 0

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
    paddingLeft: paddingLeft ?? getDefaultPadding(size, paddingRatio),
    paddingRight: paddingRight ?? getDefaultPadding(size, paddingRatio),
    borderRadius: rounding,
  })
