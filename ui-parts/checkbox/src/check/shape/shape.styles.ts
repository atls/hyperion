import { styleFn }          from 'styled-system'

import { CheckShapeStyles } from './shape.interfaces'

export const createCheckShapeStyles = ({ size, borderRadius }: CheckShapeStyles): styleFn =>
  () => ({
    height: size,
    width: size,
    borderRadius,
  })
