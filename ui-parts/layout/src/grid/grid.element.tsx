import type { GridElementProps }    from './grid.interfaces.js'

import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'
import React                        from 'react'

import { fillStyles }               from '../styles/index.js'
import { fullViewportHeightStyles } from '../styles/index.js'
import { fullViewportWidthStyles }  from '../styles/index.js'

export const GridElement = forwardRef<HTMLDivElement, GridElementProps>((
  { children, sprinkles, fill, fullViewportWidth, fullViewportHeight, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(
        className,
        String(otherProps?.className || ''),
        fill && fillStyles,
        fullViewportWidth && fullViewportWidthStyles,
        fullViewportHeight && fullViewportHeightStyles
      )}
    >
      {children}
    </div>
  )
})
