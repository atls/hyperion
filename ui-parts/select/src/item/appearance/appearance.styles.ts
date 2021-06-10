import { styleFn }          from 'styled-system'
import { execAndSerialize } from '@atls-ui-parts/styles'
import { AppearanceStyles } from './appearance.interfaces'

export const createHoverStyles =
  (backgroundColor: string, color: string, trigger: boolean): styleFn =>
  () =>
    trigger && {
      backgroundColor,
      color,
    }

export const createAppearanceStyles =
  (): styleFn =>
  ({ hoverBackgroundColor, hoverFontColor, hoverTrigger }: AppearanceStyles) =>
    execAndSerialize(createHoverStyles(hoverBackgroundColor, hoverFontColor, hoverTrigger))
