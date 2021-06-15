import styled                        from '@emotion/styled'
import { color, layout }             from 'styled-system'

import { LineContainerElementProps } from './line-container.interfaces'

const LineContainerElement = styled.div<LineContainerElementProps>(layout, color)

LineContainerElement.defaultProps = {
  backgroundColor: '#f5f5f5',
}

export { LineContainerElement }
