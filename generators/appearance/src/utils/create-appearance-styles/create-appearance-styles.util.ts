import type { InputAppearanceStyles } from './create-appearance-styles.interfaces.js'

import { style }                      from '@vanilla-extract/css'

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
}: InputAppearanceStyles): string =>
  style({
    color: fontColor,
    backgroundColor,
    borderColor: borderColor || backgroundColor,
  })
