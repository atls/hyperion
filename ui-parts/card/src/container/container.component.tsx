import type { ReactNode }      from 'react'

import type { ContainerProps } from './container.interfaces.js'

import { clsx }                from 'clsx'
import { motion }              from 'framer-motion'

import { containerStyles }     from './container.css.js'

export const Container = ({ children, className, ref, ...props }: ContainerProps): ReactNode => (
  <motion.div ref={ref} className={clsx(className, containerStyles)} {...props}>
    {children}
  </motion.div>
)
