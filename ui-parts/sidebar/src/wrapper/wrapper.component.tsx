import { FC }                  from 'react'
import { clsx }                from 'clsx'
import React                   from 'react'

import { WrapperProps }        from './wrapper.interfaces.js'
import { pinnedWrapperStyles } from './wrapper.css.js'
import { baseWrapperStyles }   from './wrapper.css.js'

export const Wrapper: FC<WrapperProps> = ({ children, pinned, className, ...props }) => (
  <div className={clsx(className, baseWrapperStyles, pinned && pinnedWrapperStyles)} {...props}>
    {children}
  </div>
)
