import type { HTMLMotionProps } from 'framer-motion'

import { motion }               from 'framer-motion'
import { forwardRef }           from 'react'
import React                    from 'react'

import { defaultLayerProps }    from './layer.constants.js'

export const Layer = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>((
  { children, ...props },
  ref
) => (
  <motion.div ref={ref} {...defaultLayerProps} {...props}>
    {children}
  </motion.div>
))
