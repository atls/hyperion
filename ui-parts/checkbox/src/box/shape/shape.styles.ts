import { styleFn }          from 'styled-system'
import { prop, switchProp } from 'styled-tools'

import { execAndSerialize } from '@atls-ui-parts/styles'
import { combine }          from '@atls-ui-parts/styles'

import { BoxShapeStyles }   from './shape.interfaces'

export const createBoxBaseShapeStyles: styleFn =
  (size: number, borderWidth: number | Function) => () => ({
    height: size,
    width: size,
    borderWidth,
  })

export const createPatternStyles: styleFn = (borderRadius: number) =>
  switchProp(prop('shape', 'square'), {
    square: {
      borderRadius,
    },
    circle: {
      borderRadius: '50%',
    },
  })

export const createBoxShapeStyles = ({
  size,
  borderWidth,
  borderRadius,
}: BoxShapeStyles): styleFn =>
  execAndSerialize(
    combine(createBoxBaseShapeStyles(size, borderWidth), createPatternStyles(borderRadius))
  )
