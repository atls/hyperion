import { styleFn }             from 'styled-system'

import { BoxAppearanceStyles } from './appearance.interfaces'

export const createBoxAppearanceStyles =
  ({ borderColor, backgroundColor }: BoxAppearanceStyles): styleFn =>
  () => ({
    borderColor,
    backgroundColor,
  })
