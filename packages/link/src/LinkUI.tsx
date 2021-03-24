import { layout }    from 'styled-system'

import styled        from '@emotion/styled'
import { Text }      from '@atlantis-lab/text'
import { withTheme } from '@emotion/react'

export const LinkUI = styled<any>(Text.withComponent('a'))(
  {
    position: 'relative',
    display: 'inline-flex',
  },
  layout,
)

export default withTheme(LinkUI)
