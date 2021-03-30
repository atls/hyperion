import { layout } from 'styled-system'

import styled     from '@emotion/styled'
import { Text }   from '@atlantis-lab/text'

export const LinkUI = styled<any>(Text.withComponent('a'))(
  {
    position: 'relative',
    display: 'inline-flex',
  },
  layout,
)
