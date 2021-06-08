import { styleFn }               from 'styled-system'

import { LabelAppearanceStyles } from './appearance.interfaces'

export const createLabelAppearanceStyles =
  ({ fontColor }: LabelAppearanceStyles): styleFn =>
  () => ({
    color: fontColor,
  })
