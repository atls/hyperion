import isPropValid                                      from '@emotion/is-prop-valid'
import styled                                           from '@emotion/styled'

import { flexbox }                                      from 'styled-system'
import { layout }                                       from 'styled-system'
import { space }                                        from 'styled-system'
import { system }                                       from 'styled-system'

import { LayoutProps }                                  from './layout.interfaces'
import { fillHeightStyles }                              from '../styles'

import { fillStyles }                  from '../styles'

import { fillWidthStyles } from '../styles'

const Layout = styled('div', {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && !['fill', 'fillHeight', 'fillWidth'].includes(prop),
})<LayoutProps>(
  system({
    boxSizing: true,
  }),
  layout,
  space,
  flexbox,
  fillStyles,
  fillHeightStyles,
  fillWidthStyles
)

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}

export { Layout }
