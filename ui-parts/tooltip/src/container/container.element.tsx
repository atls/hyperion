import React, { FunctionComponent, forwardRef } from 'react'
import { motion }                               from 'framer-motion'

import { ContainerElementProps }                from './container.interfaces'

export const ContainerElement: FunctionComponent<ContainerElementProps> = forwardRef(
  ({ animate, ...props }, ref) => (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.8 } : {}}
      animate={animate ? { opacity: 1, scale: 1, y: 0 } : {}}
      exit={animate ? { opacity: 0, scale: 0.8 } : {}}
      transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      ref={ref}
      {...props}
    />
  )
)
