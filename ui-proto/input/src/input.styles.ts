import { prop, switchProp }       from 'styled-tools'

import { createBaseStyles }       from '@atls-ui-parts/input'
import { createShapeStyles }      from '@atls-ui-parts/input'
import { createAppearanceStyles } from '@atls-ui-parts/input'

const smallNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 400,
  size: 32,
  fontSize: 11,
  rounding: 6,
  paddingLeft: 12,
  paddingRight: 12,
})

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 400,
  size: 40,
  fontSize: 12,
  rounding: 6,
  paddingLeft: 16,
  paddingRight: 16,
})

const largeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 400,
  size: 48,
  fontSize: 14,
  rounding: 6,
  paddingLeft: 16,
  paddingRight: 16,
})

export const baseStyles = createBaseStyles()
export const appearanceStyles = createAppearanceStyles({
  fontColor: 'black',
  backgroundColor: 'white',
  borderColor: '#DADEED',
})

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})
