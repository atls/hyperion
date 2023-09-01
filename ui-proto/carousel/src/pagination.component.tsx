import styled                               from '@emotion/styled'

import { createPaginationBaseStyles }       from '@atls-ui-parts/carousel'
import { createPaginationShapeStyles }      from '@atls-ui-parts/carousel'
import { createPaginationAppearanceStyles } from '@atls-ui-parts/carousel'

export const Pagination = styled.div(
  createPaginationBaseStyles(),
  createPaginationShapeStyles({
    size: 16,
    margin: 10,
    borderWidth: 0,
    activeBorderWidth: 2,
    borderRadius: 8,
  }),
  createPaginationAppearanceStyles({
    borderColor: 'gray',
    backgroundColor: 'gray',
    activeBackgroundColor: 'blue',
    activeBorderColor: 'blue',
  })
)
