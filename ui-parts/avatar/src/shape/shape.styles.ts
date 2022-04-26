import { styleFn }           from 'styled-system'
import { prop }              from 'styled-tools'
import { switchProp }        from 'styled-tools'

import { execAndSerialize }  from '@atls-ui-parts/styles'
import { combine }           from '@atls-ui-parts/styles'

import { AvatarShapeStyles } from './shape.interfaces'

export const createBaseShapeStyles: styleFn = (
    padding: number,
    borderWidth: number,
    fontSize: number | Function,
    fontWeight: string | number | Function,
    fontFamily: string | Function
  ) =>
  () => ({
    padding,
    borderWidth,
    fontSize,
    fontWeight,
    fontFamily,
  })

export const createPatternStyles: styleFn = (size: number, borderRadius: number) =>
  switchProp(prop('shape', 'circle'), {
    square: {
      width: size,
      height: size,
      borderRadius,
    },
    circle: {
      width: size,
      height: size,
      borderRadius: '50%',
    },
  })

export const createShapeStyles = ({
  size,
  borderRadius = 4,
  borderWidth,
  padding,
  fontSize,
  fontWeight,
  fontFamily,
}: AvatarShapeStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseShapeStyles(padding, borderWidth, fontSize, fontWeight, fontFamily),
      createPatternStyles(size, borderRadius)
    )
  )
