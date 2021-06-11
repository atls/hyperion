import styled                                       from '@emotion/styled'

import { ThumbElement }                             from './thumb.element'
import { baseThumbStyles, ifDisabledThumbModifier } from './thumb.styles'

const Thumb = styled(ThumbElement)(baseThumbStyles, ifDisabledThumbModifier())

export { Thumb }
