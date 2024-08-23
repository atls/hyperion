import React               from 'react'
import { HTMLMotionProps } from 'framer-motion'
import { clsx }            from 'clsx'
import { motion }          from 'framer-motion'
import { forwardRef }      from 'react'

import { containerStyles } from './container.css.js'

export const Container = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>((
  { children, className, ...props },
  ref
) => (
  <motion.div ref={ref} className={clsx(className, containerStyles)} {...props}>
    {children}
  </motion.div>
))
