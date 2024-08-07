import React                      from 'react'
import { clsx }                   from 'clsx'
import { motion }                 from 'framer-motion'
import { forwardRef }             from 'react'

import { ExpanderProps }          from './expander.interfaces.js'
import { expanderStyles }         from './expander.css.js'
import { expanderMotionVariants } from './expander.motion.js'

export const Expander = forwardRef<HTMLDivElement, ExpanderProps>((
  { children, className, opened, ...props },
  ref
) => (
  <motion.div
    ref={ref}
    className={clsx(className, expanderStyles)}
    animate={opened ? 'visible' : 'hidden'}
    initial={opened ? 'visible' : 'hidden'}
    variants={expanderMotionVariants}
    {...props}
  >
    {children}
  </motion.div>
))
