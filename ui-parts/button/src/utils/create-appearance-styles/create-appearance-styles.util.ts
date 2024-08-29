import type { ButtonAppearanceStyles } from './create-appearance-styles.interfaces.js'

import { style }                       from '@vanilla-extract/css'

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
}: ButtonAppearanceStyles): string =>
  style({
    color: fontColor,
    backgroundColor,
    borderColor: borderColor || backgroundColor,
  })
