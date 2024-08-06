import React                        from 'react'
import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'

import { BoxProps }                 from './box.interfaces.js'
import { fillStyles }               from '../styles/index.js'
import { fullViewportHeightStyles } from '../styles/index.js'
import { fullViewportWidthStyles }  from '../styles/index.js'
import { boxSprinkles }             from './box.css.js'

export const Box = forwardRef<HTMLDivElement, BoxProps>((
  { children, fill, fullViewportWidth, fullViewportHeight, ...props },
  ref
) => {
  const { className, style, otherProps } = boxSprinkles(props)

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

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
