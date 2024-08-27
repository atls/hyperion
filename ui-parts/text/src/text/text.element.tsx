import { clsx }             from 'clsx'
import { forwardRef }       from 'react'
import React                from 'react'

import { TextElementProps } from './text.interfaces.js'

export const TextElement = forwardRef<HTMLSpanElement, TextElementProps>((
  { children, sprinkles, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </span>
  )
})
