import type { HTMLMotionProps } from 'framer-motion'
import type { ReactNode }       from 'react'

import { motion }               from 'framer-motion'

import { defaultLayerProps }    from './layer.constants.js'

export const Layer = ({ children, ref, ...props }: HTMLMotionProps<'div'>): ReactNode => (
  <motion.div ref={ref} {...defaultLayerProps} {...props}>
    {children}
  </motion.div>
)
