import { prop, switchProp }       from 'styled-tools'

import { createBaseStyles }       from '@atls-ui-parts/avatar'
import { createShapeStyles }      from '@atls-ui-parts/avatar'
import { createAppearanceStyles } from '@atls-ui-parts/avatar'

const smallNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 600,
  size: 40,
  fontSize: 18,
})

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 600,
  size: 48,
  fontSize: 20,
})

const largeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 600,
  size: 56,
  fontSize: 22,
})

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: 'black',
})

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})
