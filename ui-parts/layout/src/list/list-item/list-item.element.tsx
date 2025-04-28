import type { ReactNode }            from 'react'

import type { ListItemElementProps } from './list-item.interfaces.js'

import { clsx }                      from 'clsx'
import React                         from 'react'

import { fillStyles }                from '../../styles/index.js'

export const ListItemElement = ({
  children,
  ref,
  sprinkles,
  fill,
  ...props
}: ListItemElementProps): ReactNode => {
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
}
