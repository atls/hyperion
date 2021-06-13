import styled         from '@emotion/styled'
import { motion }     from 'framer-motion'
import { layout }     from 'styled-system'
import { space }      from 'styled-system'
import { color }      from 'styled-system'
import { flexbox }    from 'styled-system'
import { border }     from 'styled-system'

import { baseStyles } from './menu.styles'

export const Menu = styled(motion.ul)(baseStyles, layout, space, color, flexbox, border)
