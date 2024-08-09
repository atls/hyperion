import React                      from 'react'

import { BackdropElement }        from './backdrop.element.js'
import { BackdropProps }          from './backdrop.interfaces.js'
import { backdropMotionVariants } from './backdrop.motion.js'
import { baseBackdropStyles }     from './backdrop.styles.css.js'

export const Backdrop: React.FC<BackdropProps> = (props) => (
  <BackdropElement
    className={baseBackdropStyles}
    variants={backdropMotionVariants}
    animate='target'
    initial='enter'
    exit='exit'
    {...props}
  />
)
