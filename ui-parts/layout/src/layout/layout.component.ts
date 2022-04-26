import styled          from '@emotion/styled'

import { flexbox }     from 'styled-system'
import { layout }      from 'styled-system'
import { space }       from 'styled-system'
import { system }      from 'styled-system'

import { LayoutProps } from './layout.interfaces'
import { fillStyles }  from '../styles'

const Layout = styled.div<LayoutProps>(
  system({
    boxSizing: true,
  }),
  layout,
  space,
  flexbox,
  fillStyles
)

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}

export { Layout }
