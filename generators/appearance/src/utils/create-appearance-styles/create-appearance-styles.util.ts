import type { AppearanceStyles } from './create-appearance-styles.interfaces.js'

import { style }                 from '@vanilla-extract/css'

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  border,
  borderColor,
}: AppearanceStyles): string =>
  style({
    color: fontColor,
    backgroundColor,
    border,
    borderColor: borderColor || backgroundColor,
  })
