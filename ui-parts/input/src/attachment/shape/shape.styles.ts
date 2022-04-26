import { styleFn }               from 'styled-system'

import { AttachmentShapeStyles } from './shape.interfaces'

export const createAttachmentShapeStyles: styleFn = ({
    fontSize,
    fontWeight,
    fontFamily,
  }: AttachmentShapeStyles) =>
  () => ({ fontSize, fontWeight, fontFamily })
