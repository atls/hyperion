import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'
import React                        from 'react'

import { LayoutElementProps }       from './layout.interfaces.js'
import { fillStyles }               from '../styles/index.js'
import { fullViewportHeightStyles } from '../styles/index.js'
import { fullViewportWidthStyles }  from '../styles/index.js'

export const LayoutElement = forwardRef<HTMLDivElement, LayoutElementProps>((
  { children, sprinkles, fill, fullViewportWidth, fullViewportHeight, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        fill && fillStyles,
        fullViewportWidth && fullViewportWidthStyles,
        fullViewportHeight && fullViewportHeightStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})
