import styled             from '@emotion/styled'
import { ifProp }         from 'styled-tools'
import { layout }         from 'styled-system'

import { baseStyles }     from './box.styles'
import { overflowStyles } from './box.styles'

const Box = styled.div<any>(baseStyles, layout, ifProp('overflow', overflowStyles))

export { Box }
