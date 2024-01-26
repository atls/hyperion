import { prop }                   from 'styled-tools'
import { switchProp }             from 'styled-tools'

import { createBaseStyles }       from '@atls-ui-parts/button'
import { createShapeStyles }      from '@atls-ui-parts/button'
import { createContentStyles }    from '@atls-ui-parts/button'
import { createAppearanceStyles } from '@atls-ui-parts/button'

const smallNormalSizeStyles = createShapeStyles({ size: 24, fontSize: 11, rounding: 3 })
const shapeNormalSizeStyles = createShapeStyles({ size: 32, fontSize: 12, rounding: 3 })
const largeNormalSizeStyles = createShapeStyles({ size: 48, fontSize: 14, rounding: 3 })

const appearancePrimaryStyles = createAppearanceStyles({
  fontColor: 'white',
  backgroundColor: prop('theme.colors.button.primary.fill'),
  invertedBorderWidth: 2,
})

export const baseStyles = createBaseStyles()
export const contentStyles = createContentStyles()

export const shapeStyles = switchProp(prop('size', 'normal'), {
  small: smallNormalSizeStyles,
  normal: shapeNormalSizeStyles,
  large: largeNormalSizeStyles,
})

export const variantStyles = switchProp(prop('variant', 'primary'), {
  primary: appearancePrimaryStyles,
})
