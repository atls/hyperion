import styled          from '@emotion/styled'

import { LayoutProps } from '../layout'
import { Layout }      from '../layout'

const Column = styled(Layout)<LayoutProps>()

Column.defaultProps = {
  boxSizing: 'border-box',
  flexDirection: 'column',
  display: 'flex',
  width: '100%',
}

export { Column }
