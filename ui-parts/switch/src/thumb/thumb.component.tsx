import styled                      from '@emotion/styled'

import { ThumbElement }            from './thumb.element'
import { baseThumbStyles }         from './thumb.styles'
import { ifDisabledThumbModifier } from './thumb.styles'

const Thumb = styled(ThumbElement)(baseThumbStyles, ifDisabledThumbModifier())

export { Thumb }
