import isPropValid          from '@emotion/is-prop-valid'
import styled               from '@emotion/styled'

import { background }       from 'styled-system'
import { border }           from 'styled-system'
import { boxShadow }        from 'styled-system'
import { color }            from 'styled-system'
import { flexbox }          from 'styled-system'
import { layout }           from 'styled-system'
import { system }           from 'styled-system'
import { position }         from 'styled-system'
import { space }            from 'styled-system'

import { BoxProps }         from './box.interfaces'
import { fillHeightStyles } from '../styles'
import { fillStyles }       from '../styles'
import { fillWidthStyles }  from '../styles'

const Box = styled('div', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['fill', 'fillHeight', 'fillWidth'].includes(prop),
})<BoxProps>(
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
  fillStyles,
  fillHeightStyles,
  fillWidthStyles
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}

export { Box }
