import type { ReactNode }      from 'react'

import type { WrapperProps }   from './wrapper.interfaces.js'

import { clsx }                from 'clsx'

import { pinnedWrapperStyles } from './wrapper.css.js'
import { baseWrapperStyles }   from './wrapper.css.js'

export const Wrapper = ({ children, pinned, className, ...props }: WrapperProps): ReactNode => (
  <div className={clsx(className, baseWrapperStyles, pinned && pinnedWrapperStyles)} {...props}>
    {children}
  </div>
)
