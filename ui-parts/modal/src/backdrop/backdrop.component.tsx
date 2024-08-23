import React                      from 'react'
import { FC }                     from 'react'
import { motion }                 from 'framer-motion'

import { BackdropProps }          from './backdrop.interfaces.js'
import { baseBackdropStyles }     from './backdrop.css.js'
import { backdropMotionVariants } from './backdrop.motion.js'

export const Backdrop: FC<BackdropProps> = (props) => (
  <motion.div
    className={baseBackdropStyles}
    variants={backdropMotionVariants}
    animate='target'
    initial='enter'
    exit='exit'
    {...props}
  />
)
