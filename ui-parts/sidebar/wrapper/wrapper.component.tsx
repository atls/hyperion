import styled                                         from '@emotion/styled'

import { WrapperElement }                             from './wrapper.element'
import { baseWrapperStyles, ifPinnedWrapperModifier } from './wrapper.styles'

// @ts-ignore
const Wrapper = styled(WrapperElement)(baseWrapperStyles, ifPinnedWrapperModifier())

export { Wrapper }
