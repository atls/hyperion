import styled                               from '@emotion/styled'

import { createNavigationBaseStyles }       from '@atls-ui-parts/carousel'
import { createNavigationShapeStyles }      from '@atls-ui-parts/carousel'
import { createNavigationAppearanceStyles } from '@atls-ui-parts/carousel'
import { createNavigationPositionStyles }   from '@atls-ui-parts/carousel'

export const Navigation = styled.div(
  createNavigationBaseStyles(),
  createNavigationShapeStyles({
    width: 50,
  }),
  createNavigationAppearanceStyles({
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }),
  createNavigationPositionStyles()
)
