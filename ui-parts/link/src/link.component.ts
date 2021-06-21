import styled        from '@emotion/styled'
import { Text }      from '@atls-ui-parts/text'

import { LinkProps } from './link.types'

export const Link = styled<LinkProps>(Text.withComponent('a'))(
  {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  ({ active, activeStyles }) => active && activeStyles
)

Link.defaultProps = Text.defaultProps
