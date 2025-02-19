import type { ParagraphElementProps } from './paragraph.interfaces.js'

import { clsx }                       from 'clsx'
import { forwardRef }                 from 'react'
import React                          from 'react'

export const ParagraphElement = forwardRef<HTMLParagraphElement, ParagraphElementProps>((
  { children, sprinkles, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <p
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </p>
  )
})
