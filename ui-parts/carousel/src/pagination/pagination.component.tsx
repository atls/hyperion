import type { ReactNode }       from 'react'

import type { PaginationProps } from './pagination.interfaces.js'

import { clsx }                 from 'clsx'
import React                    from 'react'

import { basePaginationStyles } from './pagination.css.js'
import { paginationSprinkles }  from './pagination.css.js'

export const Pagination = ({
  children,
  active = false,
  activeStyleOptions,
  ref,
  ...props
}: PaginationProps): ReactNode => {
  const activeStyles = active ? activeStyleOptions : {}

  const { className, style, otherProps } = paginationSprinkles({ ...props, ...activeStyles })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''), basePaginationStyles)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
}
