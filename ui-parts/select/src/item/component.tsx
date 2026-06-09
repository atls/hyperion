import type { ReactNode }            from 'react'

import type { ItemProps }            from './interfaces.js'

import { clsx }                      from 'clsx'

import { baseItemStyles }            from './item.css.js'
import { highlightedMenuItemStyles } from './item.css.js'

export const MenuItem = ({
  highlighted,
  highlightedClassName,
  children,
  className,
  ...props
}: ItemProps): ReactNode => (
  <li
    {...props}
    className={clsx(
      baseItemStyles,
      highlighted && highlightedMenuItemStyles,
      highlighted && highlightedClassName,
      className
    )}
  >
    {children}
  </li>
)
