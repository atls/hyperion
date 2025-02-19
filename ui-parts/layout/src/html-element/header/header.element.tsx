import type { HTMLElementElementProps } from '../index.js'

import { clsx }                         from 'clsx'
import { forwardRef }                   from 'react'
import React                            from 'react'

import { fillStyles }                   from '../../styles/index.js'
import { fullViewportHeightStyles }     from '../../styles/index.js'
import { fullViewportWidthStyles }      from '../../styles/index.js'

export const HeaderElement = forwardRef<HTMLElement, HTMLElementElementProps>((
  { children, fill, fullViewportWidth, fullViewportHeight, sprinkles, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <header
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
    </header>
  )
})
