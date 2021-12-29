import styled         from '@emotion/styled'
import { background } from 'styled-system'
import { border }     from 'styled-system'
import { boxShadow }  from 'styled-system'
import { color }      from 'styled-system'
import { flexbox }    from 'styled-system'
import { layout }     from 'styled-system'
import { system }     from 'styled-system'
import { position }   from 'styled-system'
import { space }      from 'styled-system'

import { BoxProps }   from './box.interfaces'
import { fillStyles } from '../styles'

const Box = styled.div<BoxProps>(
  system({
    boxSizing: true,
    cursor: true,
  }),
  layout,
  space,
  flexbox,
  color,
  position,
  boxShadow,
  border,
  background,
  fillStyles
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}

export { Box }
