import type { TextElementProps } from './text.interfaces.js'

import { clsx }                  from 'clsx'
import { forwardRef }            from 'react'
import React                     from 'react'

export const TextElement = forwardRef<HTMLSpanElement, TextElementProps>((
  { children, sprinkles, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </span>
  )
})
