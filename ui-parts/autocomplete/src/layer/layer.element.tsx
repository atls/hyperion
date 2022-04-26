import styled     from '@emotion/styled'

import { motion } from 'framer-motion'
import { layout } from 'styled-system'

const LayerElement: any = styled(motion.div)(layout, {
  zIndex: 2000,
})

LayerElement.defaultProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: 'spring',
    damping: 30,
    stiffness: 400,
  },
}

export { LayerElement }
