import styled          from '@emotion/styled'

import { LayoutProps } from '../layout'
import { Layout }      from '../layout'

const Row = styled(Layout)<LayoutProps>()

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  boxSizing: 'border-box',
}

export { Row }
