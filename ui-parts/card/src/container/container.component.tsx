import styled                  from '@emotion/styled'
import { motion }              from 'framer-motion'

import { baseContainerStyles } from './container.styles'
import { ContainerProps }      from './container.interface'

const Container = styled(motion.div)<ContainerProps>(baseContainerStyles)

export { Container }
