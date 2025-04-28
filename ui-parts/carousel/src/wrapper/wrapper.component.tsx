import type { ReactNode }          from 'react'

import type { WrapperProps }       from './wrapper.interfaces.js'

import { clsx }                    from 'clsx'
import { motion }                  from 'framer-motion'
import React                       from 'react'

import { baseWrapperStyles }       from './wrapper.css.js'
import { horizontalWrapperStyles } from './wrapper.css.js'
import { verticalWrapperStyles }   from './wrapper.css.js'

export const Wrapper = ({
  children,
  className,
  direction = 'horizontal',
  ref,
  ...props
}: WrapperProps): ReactNode => (
  <motion.div
    ref={ref}
    className={clsx(
      className,
      baseWrapperStyles,
      direction === 'horizontal' ? horizontalWrapperStyles : verticalWrapperStyles
    )}
    {...props}
  >
    {children}
  </motion.div>
)
