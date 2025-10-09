import type { ReactNode }   from 'react'

import type { ItemProps }   from './item.interfaces.js'

import { clsx }             from 'clsx'

import { activeItemStyles } from './item.css.js'
import { baseItemStyles }   from './item.css.js'

export const Item = ({ children, active, className, ...props }: ItemProps): ReactNode => (
  <a className={clsx(className, baseItemStyles, active && activeItemStyles)} {...props}>
    {children}
  </a>
)
