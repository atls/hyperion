import type { HTMLMotionProps } from 'framer-motion'

import { motion }               from 'framer-motion'
import { forwardRef }           from 'react'
import React                    from 'react'

export const Layer = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>((
  { children, ...props },
  ref
) => (
  <motion.div ref={ref} {...props}>
    {children}
  </motion.div>
))

Layer.defaultProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    type: 'spring',
    damping: 30,
    stiffness: 400,
  },
}
