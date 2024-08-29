import type { FC }                from 'react'
import type { PropsWithChildren } from 'react'

import { clsx }                   from 'clsx'
import React                      from 'react'

import { baseHandleStyles }       from './handle.css.js'
import { handleSprinkles }        from './handle.css.js'

export const Handle: FC<PropsWithChildren> = ({ children, ...props }) => {
  const { className, style, otherProps } = handleSprinkles(props)

  return (
    <button
      type='button'
      {...otherProps}
      className={clsx(baseHandleStyles, String(otherProps?.className || ''), className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </button>
  )
}
