import styled          from '@emotion/styled'

import { LayoutProps } from '../layout'
import { Layout }      from '../layout'

const Row = styled(Layout)<LayoutProps>()

Row.defaultProps = {
  boxSizing: 'border-box',
  flexDirection: 'row',
  display: 'flex',
  width: '100%',
}

export { Row }
