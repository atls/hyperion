import React                  from 'react'
import styled                 from '@emotion/styled'
import { motion }             from 'framer-motion'

import { baseBackdropStyles } from './backdrop.styles'

const BackdropBase = styled(motion.div)(baseBackdropStyles)

const Backdrop = ({ onClick = () => {}, ...props }) => <BackdropBase onClick={onClick} {...props} />

export { Backdrop }
