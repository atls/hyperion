import type { ReactNode }     from 'react'

import type { BackdropProps } from './backdrop.interfaces.js'

import { clsx }               from 'clsx'
import { motion }             from 'framer-motion'
import React                  from 'react'

import { backdropStyles }     from './backdrop.css.js'

export const Backdrop = ({ children, className, ref, ...props }: BackdropProps): ReactNode => (
  <motion.div ref={ref} className={clsx(className, backdropStyles)} {...props}>
    {children}
  </motion.div>
)
