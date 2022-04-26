import { styleFn }                    from 'styled-system'

import { AttachmentAppearanceStyles } from './appearance.interfaces'

export const createAttachmentAppearanceStyles: styleFn = ({
    fontColor,
  }: AttachmentAppearanceStyles) =>
  () => ({
    color: fontColor,
  })
