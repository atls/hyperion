import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'

const smallNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 600,
  size: 24,
  fontSize: 11,
  rounding: 6,
})

const shapeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 600,
  size: 32,
  fontSize: 12,
  rounding: 6,
})

const largeNormalSizeStyles = createShapeStyles({
  fontFamily: prop('theme.fonts.primary'),
  fontWeight: 600,
  size: 48,
  fontSize: 14,
  rounding: 6,
})

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: 'black',
  invertedBorderWidth: 2,
})

export const contentStyles = createContentStyles()

export const baseStyles = createBaseStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})
