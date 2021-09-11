import { styleFn }                    from 'styled-system'

import { execAndSerialize }           from '@atls-ui-parts/styles'
import { combine }                    from '@atls-ui-parts/styles'

import { NavigationAppearanceStyles } from './appearance.interfaces'

const createColorStyles: styleFn =
  (color: string, backgroundColor: string, borderColor: string) => () => ({
    backgroundColor,
    borderColor,
    color,
  })

export const createNavigationAppearanceStyles = ({
  color,
  backgroundColor,
  borderColor,
}: NavigationAppearanceStyles): styleFn =>
  execAndSerialize(combine(createColorStyles(color, backgroundColor, borderColor)))
