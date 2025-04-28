import type { ReactNode }         from 'react'

import type { MenuItemProps }     from './menu-item.interfaces.js'

import { clsx }                   from 'clsx'
import React                      from 'react'

import { baseMenuItemStyles }     from './menu-item.css.js'
import { hoveredMenuItemStyles }  from './menu-item.css.js'
import { selectedMenuItemStyles } from './menu-item.css.js'

export const MenuItem = ({
  children,
  className,
  hover,
  selected,
  ref,
  ...props
}: MenuItemProps): ReactNode => (
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
)
