import { styleFn }                    from 'styled-system'
import { ifProp }                     from 'styled-tools'

import { execAndSerialize }           from '@atls-ui-parts/styles'
import { combine }                    from '@atls-ui-parts/styles'

import { PaginationAppearanceStyles } from './appearance.interfaces'

export const createColorStyles: styleFn = (
  color: string,
  backgroundColor: string,
  borderColor: string,
  borderStyle: string
) => () => ({
  color,
  backgroundColor,
  borderColor,
  borderStyle,
})

export const createAppearanceActiveStyles: styleFn = (
  activeFontColor: string,
  activeBackgroundColor: string,
  activeBorderColor: string
) =>
  ifProp('active', () => ({
    color: activeFontColor,
    backgroundColor: activeBackgroundColor,
    borderColor: activeBorderColor,
  }))

export const createPaginationAppearanceStyles = ({
  fontColor,
  backgroundColor,
  borderColor,
  activeFontColor,
  activeBackgroundColor,
  activeBorderColor,
  borderStyle = 'solid',
}: PaginationAppearanceStyles): styleFn =>
  execAndSerialize(
    combine(
      createColorStyles(fontColor, backgroundColor, borderColor, borderStyle),
      createAppearanceActiveStyles(activeFontColor, activeBackgroundColor, activeBorderColor)
    )
  )
