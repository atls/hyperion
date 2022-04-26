import { styleFn }                  from 'styled-system'
import { ifProp }                   from 'styled-tools'
import { prop }                     from 'styled-tools'
import { switchProp }               from 'styled-tools'

import { execAndSerialize }         from '@atls-ui-parts/styles'
import { combine }                  from '@atls-ui-parts/styles'

import { ButtonShapeRoundingProps } from './shape.interfaces'
import { ButtonShapeStyles }        from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
    size: number,
    fontSize: number | Function,
    fontWeight: string | Function,
    fontFamily: string | Function
  ) =>
  () => ({ height: size, fontSize, fontWeight, fontFamily })

export const createPaddingStyles: styleFn = (paddingLeft, paddingRight) => () => ({
  paddingLeft,
  paddingRight,
})

export const createFillStyles: styleFn = () => ifProp('fill', { width: '100%' })

export const createRoundingStyles: styleFn = (defaultRounding: number) =>
  ifProp(
    'rounding',
    ({ rounding }: ButtonShapeRoundingProps) => ({
      borderRadius: rounding,
    }),
    { borderRadius: defaultRounding }
  )

export const createPatternStyles: styleFn = (size: number) =>
  switchProp(prop('shape', 'rectangle'), {
    rectangle: {
      height: size,
    },
    square: {
      padding: 0,
      width: size,
      height: size,
      borderRadius: 0,
    },
    circle: {
      padding: 0,
      width: size,
      height: size,
      borderRadius: '50%',
    },
  })

export const createShapeStyles = ({
  size,
  fontFamily,
  fontSize,
  fontWeight,
  paddingLeft,
  paddingRight,
  paddingRatio = 0.5,
  rounding = 0,
}: ButtonShapeStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(size, fontSize, fontWeight, fontFamily),
      createPaddingStyles(paddingLeft || size * paddingRatio, paddingRight || size * paddingRatio),
      createRoundingStyles(rounding),
      createFillStyles(),
      createPatternStyles(size)
    )
  )
