import React                    from 'react'
import { clsx }                 from 'clsx'
import { forwardRef }           from 'react'

import { PaginationProps }      from './pagination.interfaces.js'
import { basePaginationStyles } from './pagination.css.js'
import { paginationSprinkles }  from './pagination.css.js'

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>((
  { children, active = false, activeStyleOptions, ...props },
  ref
) => {
  const activeStyles = active ? activeStyleOptions : {}

  const { className, style, otherProps } = paginationSprinkles({ ...props, ...activeStyles })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className, basePaginationStyles)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})
