import React                     from 'react'
import { motion }                from 'framer-motion'
import { forwardRef }            from 'react'

import { ContainerElementProps } from './container.interfaces'

export const ContainerElement = forwardRef<HTMLDivElement, ContainerElementProps>(
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
