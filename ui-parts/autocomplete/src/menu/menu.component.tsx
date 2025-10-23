import type { ReactNode } from 'react'

import type { MenuProps } from './menu.interfaces.js'

import { clsx }           from 'clsx'

import { baseMenuStyles } from './menu.css.js'

export const Menu = ({ children, className, ref, ...props }: MenuProps): ReactNode => (
  <div ref={ref} className={clsx(className, baseMenuStyles)} {...props}>
    {children}
  </div>
)
