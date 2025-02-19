import type { ListItemElementProps } from './list-item.interfaces.js'

import { clsx }                      from 'clsx'
import { forwardRef }                from 'react'
import React                         from 'react'

import { fillStyles }                from '../../styles/index.js'

export const ListItemElement = forwardRef<HTMLLIElement, ListItemElementProps>((
  { children, sprinkles, fill, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <li
      ref={ref}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(className, String(otherProps?.className || ''), fill && fillStyles)}
    >
      {children}
    </li>
  )
})
