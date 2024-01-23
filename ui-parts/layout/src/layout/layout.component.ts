import isPropValid                  from '@emotion/is-prop-valid'
import styled                       from '@emotion/styled'

import { flexbox }                  from 'styled-system'
import { layout }                   from 'styled-system'
import { space }                    from 'styled-system'
import { system }                   from 'styled-system'

import { LayoutProps }              from './layout.interfaces'
import { fullViewportHeightStyles } from '../styles'
import { fillStyles }               from '../styles'
import { fullViewportWidthStyles }  from '../styles'

const Layout = styled('div', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['fill', 'fullViewportHeight', 'fullViewportWidth'].includes(prop),
})<LayoutProps>(
  system({
    boxSizing: true,
  }),
  layout,
  space,
  flexbox,
  fillStyles,
  fullViewportHeightStyles,
  fullViewportWidthStyles
)

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}

export { Layout }
