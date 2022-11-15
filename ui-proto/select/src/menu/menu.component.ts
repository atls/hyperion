import styled                   from '@emotion/styled'

import { baseMenuStyles }       from './menu.styles'
import { shapeMenuStyles }      from './menu.styles'
import { appearanceMenuStyles } from './menu.styles'

const Menu = styled.div(baseMenuStyles, shapeMenuStyles, appearanceMenuStyles)

export { Menu }
