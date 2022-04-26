import { styleFn }          from 'styled-system'

import { LabelShapeStyles } from './shape.interfaces'

export const createLabelShapeStyles = ({
    fontSize,
    fontWeight,
    fontFamily,
  }: LabelShapeStyles): styleFn =>
  () => ({
    fontSize,
    fontWeight,
    fontFamily,
  })
