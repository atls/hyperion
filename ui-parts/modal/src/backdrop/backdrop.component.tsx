import type { ReactNode }         from 'react'

import type { BackdropProps }     from './backdrop.interfaces.js'

import { motion }                 from 'framer-motion'
import React                      from 'react'

import { baseBackdropStyles }     from './backdrop.css.js'
import { backdropMotionVariants } from './backdrop.motion.js'

export const Backdrop = (props: BackdropProps): ReactNode => (
  <motion.div
    className={baseBackdropStyles}
    variants={backdropMotionVariants}
    animate='target'
    initial='enter'
    exit='exit'
    {...props}
  />
)
