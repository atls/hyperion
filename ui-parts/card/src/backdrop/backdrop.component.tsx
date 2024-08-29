import type { HTMLMotionProps } from 'framer-motion'

import { clsx }                 from 'clsx'
import { motion }               from 'framer-motion'
import { forwardRef }           from 'react'
import React                    from 'react'

import { backdropStyles }       from './backdrop.css.js'

export const Backdrop = forwardRef<HTMLDivElement, HTMLMotionProps<'div'>>((
  { children, className, ...props },
  ref
) => (
  <motion.div ref={ref} className={clsx(className, backdropStyles)} {...props}>
    {children}
  </motion.div>
))
