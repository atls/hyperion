import { styleFn }                         from 'styled-system'
import { ifProp }                          from 'styled-tools'

import { execAndSerialize }                from '@atls-ui-parts/styles'
import { combine }                         from '@atls-ui-parts/styles'

import { AvatarAppearanceStyles }          from './appearance.interfaces'
import { AvatarAppearanceBackgroundProps } from './appearance.interfaces'

export const createBaseAppearanceStyles: styleFn =
  (backgroundColor: string, borderColor: string, fontColor: string) => () => ({
    backgroundColor,
    borderColor,
    color: fontColor,
  })

export const createBackgroundStyles: styleFn = () =>
  ifProp('background', ({ background }: AvatarAppearanceBackgroundProps) => ({
    background,
  }))

export const createAppearanceStyles = ({
  backgroundColor,
  borderColor,
  fontColor,
}: AvatarAppearanceStyles): styleFn =>
  execAndSerialize(
    combine(
      createBaseAppearanceStyles(backgroundColor, borderColor, fontColor),
      createBackgroundStyles()
    )
  )
