import React                        from 'react'
import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'

import { LayoutProps }              from './layout.interfaces.js'
import { fillStyles }               from '../styles/index.js'
import { fullViewportHeightStyles } from '../styles/index.js'
import { fullViewportWidthStyles }  from '../styles/index.js'
import { layoutSprinkles }          from './layout.css.js'

export const Layout = forwardRef<HTMLDivElement, LayoutProps>((
  { children, fill, fullViewportWidth, fullViewportHeight, ...props },
  ref
) => {
  const { className, style, otherProps } = layoutSprinkles(props)

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

Layout.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
