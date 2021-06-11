import styled                                                from '@emotion/styled'

import { LinePercentElement }                                from './line-percent.element'
import { LinePercentElementProps }                           from './line-percent.interfaces'
import { baseLinePercentStyles, linePercentLinecapModifier } from './line-percent.styles'

const LinePercent = styled(LinePercentElement)<LinePercentElementProps>(
  baseLinePercentStyles,
  linePercentLinecapModifier()
)

export { LinePercent }
