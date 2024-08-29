import type { MenuItemProps }     from './menu-item.interfaces.js'

import { clsx }                   from 'clsx'
import { forwardRef }             from 'react'
import React                      from 'react'

import { baseMenuItemStyles }     from './menu-item.css.js'
import { hoveredMenuItemStyles }  from './menu-item.css.js'
import { selectedMenuItemStyles } from './menu-item.css.js'

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((
  { children, className, hover, selected, ...props },
  ref
) => (
  <div
    ref={ref}
    className={clsx(
      className,
      baseMenuItemStyles,
      hover && hoveredMenuItemStyles,
      selected && selectedMenuItemStyles
    )}
    {...props}
  >
    {children}
  </div>
))
