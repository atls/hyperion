import styled               from '@emotion/styled'
import { typography }       from 'styled-system'
import { color }            from 'styled-system'
import { space }            from 'styled-system'
import { flexbox }          from 'styled-system'

import { appearanceStyles } from './item.styles'
import { baseStyles }       from './item.styles'

export const Item = styled.li(baseStyles, typography, space, color, flexbox, appearanceStyles)
