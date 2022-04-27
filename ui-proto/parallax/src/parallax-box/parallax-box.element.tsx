import styled       from '@emotion/styled'

import { motion }   from 'framer-motion'
import { layout }   from 'styled-system'
import { flexbox }  from 'styled-system'
import { position } from 'styled-system'
import { space }    from 'styled-system'

const ParallaxBoxElement = styled(motion.div)(layout, flexbox, position, space)

export { ParallaxBoxElement }
