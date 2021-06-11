import styled                                                    from '@emotion/styled'

import { LineContainerElement }                                  from './line-container.element'
import { baseLineContainerStyles, lineContainerLinecapModifier } from './line-container.styles'

const LineContainer = styled(LineContainerElement)(
  baseLineContainerStyles,
  lineContainerLinecapModifier()
)

export { LineContainer }
