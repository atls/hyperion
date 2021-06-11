import styled             from '@emotion/styled'

import { baseStyles }     from './box.styles'
import { overflowStyles } from './box.styles'

const Box = styled.div(baseStyles, ({ overflow }) => overflow && overflowStyles)

export { Box }
