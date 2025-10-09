import type { ReactNode }           from 'react'

import type { LayoutElementProps }  from './layout.interfaces.js'

import { clsx }                     from 'clsx'

import { fillStyles }               from '../styles/index.js'
import { fullViewportHeightStyles } from '../styles/index.js'
import { fullViewportWidthStyles }  from '../styles/index.js'

export const LayoutElement = ({
  children,
  ref,
  sprinkles,
  fill,
  fullViewportWidth,
  fullViewportHeight,
  ...props
}: LayoutElementProps): ReactNode => {
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
}
