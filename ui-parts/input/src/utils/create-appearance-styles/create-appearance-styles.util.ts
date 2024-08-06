import { style }                 from '@vanilla-extract/css'

import { InputAppearanceStyles } from './create-appearance-styles.interfaces.js'

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
}: InputAppearanceStyles) =>
  style({
    color: fontColor,
    backgroundColor,
    borderColor: borderColor || backgroundColor,
  })
