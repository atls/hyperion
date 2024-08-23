import React                from 'react'
import { clsx }             from 'clsx'
import { forwardRef }       from 'react'

import { DividerProps }     from './divider.interfaces.js'
import { dividerSprinkles } from './divider.css.js'

export const Divider = forwardRef<HTMLSpanElement, DividerProps>((props, ref) => {
  const { className, style, otherProps } = dividerSprinkles(props)

  return (
    <span
      ref={ref}
      {...props}
      className={clsx(className, otherProps?.className)}
      style={{ ...style, ...otherProps?.style }}
    />
  )
})
