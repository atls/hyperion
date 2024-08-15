import React                from 'react'
import { clsx }             from 'clsx'

import { baseHandleStyles } from './handle.css.js'
import { handleSprinkles }  from './handle.css.js'

export const Handle = ({ children, ...props }) => {
  const { className, style, otherProps } = handleSprinkles(props)

  return (
    <button
      type='button'
      {...otherProps}
      className={clsx(baseHandleStyles, otherProps?.className, className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </button>
  )
}
