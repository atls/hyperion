import styled          from '@emotion/styled'

import { LayoutProps } from '../layout'
import { Layout }      from '../layout'

const Row = styled(Layout)<LayoutProps>()

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  boxSizing: 'border-box',
  width: '100%',
}

export { Row }
