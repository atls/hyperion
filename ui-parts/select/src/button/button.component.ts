import styled         from '@emotion/styled'
import { typography } from 'styled-system'
import { layout }     from 'styled-system'
import { space }      from 'styled-system'
import { color }      from 'styled-system'
import { flexbox }    from 'styled-system'
import { border }     from 'styled-system'

import { baseStyles } from './button.styles'

export const Button = styled.button(baseStyles, typography, color, layout, space, flexbox, border)
