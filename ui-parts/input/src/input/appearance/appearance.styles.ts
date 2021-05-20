import { styleFn }               from 'styled-system'

import { execAndSerialize }      from '@atls-ui-parts/styles'
import { combine }               from '@atls-ui-parts/styles'

import { InputAppearanceStyles } from './appearance.interfaces'

export const createColorStyles: styleFn =
  (color: string, backgroundColor: string, borderColor: string) => () => ({
    backgroundColor,
    borderColor,
    color,
  })

export const createAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
}: InputAppearanceStyles): styleFn =>
  execAndSerialize(combine(createColorStyles(fontColor, backgroundColor, borderColor)))
