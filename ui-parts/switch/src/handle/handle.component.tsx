import React                from 'react'
import { clsx }             from 'clsx'

import { baseHandleStyles } from './handle.styles.css.js'
import { handleSprinkles }  from './handle.styles.css.js'

export const Handle = ({ children, ...props }) => {
  const { className, style, otherProps } = handleSprinkles(props)

  return (
    <button
      {...otherProps}
      className={clsx(baseHandleStyles, otherProps?.className, className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </button>
  )
}
