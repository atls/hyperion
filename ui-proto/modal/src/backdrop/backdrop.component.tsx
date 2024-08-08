import React                      from 'react'

import { BackdropElement }        from './backdrop.element.js'
import { BackdropProps }          from './backdrop.interfaces.js'
import { backdropMotionVariants } from './backdrop.motion.js'
import { baseBackdropStyles }     from './backdrop.styles.css.js'

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <BackdropElement
      className={baseBackdropStyles}
      variants={backdropMotionVariants}
      animate='target'
      initial='enter'
      exit='exit'
      {...props}
    />
  )
}

export { Backdrop }
