import { vars }              from '@atls-ui-parts/theme'

import { createShapeStyles } from '../utils/index.js'

const normalSizeStyles = createShapeStyles({
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.medium,
  size: 20,
  fontSize: vars.fontSizes.medium,
  paddingLeft: 1,
  paddingRight: 1,
})

const bigSizeStyles = createShapeStyles({
  fontFamily: vars.fonts.primary,
  fontWeight: vars.fontWeights.bold,
  size: 54,
  fontSize: vars.fontSizes.big,
  paddingLeft: 1,
  paddingRight: 1,
})

export const shapeStyles = {
  normal: normalSizeStyles,
  big: bigSizeStyles,
}
