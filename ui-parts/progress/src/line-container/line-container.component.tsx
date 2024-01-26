import styled                           from '@emotion/styled'

import { LineContainerElement }         from './line-container.element'
import { baseLineContainerStyles }      from './line-container.styles'
import { lineContainerLinecapModifier } from './line-container.styles'

// @ts-ignore
const LineContainer = styled(LineContainerElement)(
  baseLineContainerStyles,
  lineContainerLinecapModifier()
)

export { LineContainer }
