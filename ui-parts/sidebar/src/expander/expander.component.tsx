import type { ReactNode }         from 'react'

import type { ExpanderProps }     from './expander.interfaces.js'

import { clsx }                   from 'clsx'
import { motion }                 from 'framer-motion'
import React                      from 'react'

import { expanderStyles }         from './expander.css.js'
import { expanderMotionVariants } from './expander.motion.js'

export const Expander = ({
  children,
  className,
  opened,
  ref,
  ...props
}: ExpanderProps): ReactNode => (
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
)
