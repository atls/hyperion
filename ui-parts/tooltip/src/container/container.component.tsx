import type { ReactNode }      from 'react'

import type { ContainerProps } from './container.interfaces.js'

import { AnimatePresence }     from 'framer-motion'
import { motion }              from 'framer-motion'
import React                   from 'react'

import { animateProps }        from './container.constants.js'
import { baseContainerStyles } from './container.css.js'

export const Container = ({
  animated = true,
  open = false,
  children,
  ...props
}: ContainerProps): ReactNode => (
  <motion.div {...props}>
    <AnimatePresence>
      {open && (
        <motion.div className={baseContainerStyles} {...(animated ? animateProps : {})}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)
