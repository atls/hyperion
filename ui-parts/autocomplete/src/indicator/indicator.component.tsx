import styled                                           from '@emotion/styled'

import { IndicatorElement }                             from './indicator.element'
import { baseIndicatorStyles, ifOpenIndicatorModifier } from './indicator.styles'

const Indicator = styled(IndicatorElement)(baseIndicatorStyles, ifOpenIndicatorModifier())

export { Indicator }
