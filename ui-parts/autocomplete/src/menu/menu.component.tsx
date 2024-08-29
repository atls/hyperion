import type { MenuProps } from './menu.interfaces.js'

import { clsx }           from 'clsx'
import { forwardRef }     from 'react'
import React              from 'react'

import { baseMenuStyles } from './menu.css.js'

export const Menu = forwardRef<HTMLDivElement, MenuProps>((
  { children, className, ...props },
  ref
) => (
  <div ref={ref} className={clsx(className, baseMenuStyles)} {...props}>
    {children}
  </div>
))
