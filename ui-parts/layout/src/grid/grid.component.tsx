import React                        from 'react'
import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'

import { GridProps }                from './grid.interfaces.js'
import { fillStyles }               from '../styles/index.js'
import { fullViewportHeightStyles } from '../styles/index.js'
import { fullViewportWidthStyles }  from '../styles/index.js'
import { gridSprinkles }            from './grid.css.js'

export const Grid = forwardRef<HTMLDivElement, GridProps>((
  { children, fill, fullViewportWidth, fullViewportHeight, ...props },
  ref
) => {
  const { className, style, otherProps } = gridSprinkles(props)

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

Grid.defaultProps = {
  display: 'grid',
  boxSizing: 'border-box',
}
