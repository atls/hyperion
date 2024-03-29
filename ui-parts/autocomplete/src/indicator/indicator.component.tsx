import styled                      from '@emotion/styled'

import { IndicatorElement }        from './indicator.element'
import { baseIndicatorStyles }     from './indicator.styles'
import { ifOpenIndicatorModifier } from './indicator.styles'

const Indicator = styled(IndicatorElement)(baseIndicatorStyles, ifOpenIndicatorModifier())

export { Indicator }
