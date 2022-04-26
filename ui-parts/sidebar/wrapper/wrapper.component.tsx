import styled                      from '@emotion/styled'

import { WrapperElement }          from './wrapper.element'
import { baseWrapperStyles }       from './wrapper.styles'
import { ifPinnedWrapperModifier } from './wrapper.styles'

// @ts-ignore
const Wrapper = styled(WrapperElement)(baseWrapperStyles, ifPinnedWrapperModifier())

export { Wrapper }
