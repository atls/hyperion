import styled                 from '@emotion/styled'

import React                  from 'react'
import { motion }             from 'framer-motion'

import { baseBackdropStyles } from './backdrop.styles'

const BackdropBase = styled(motion.div)(baseBackdropStyles)

const doNothing = () => {
  // do nothing
}

const Backdrop = ({ onClick = doNothing, ...props }) => (
  <BackdropBase onClick={onClick} {...props} />
)

export { Backdrop }
