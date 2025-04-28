import type { ReactNode }               from 'react'

import type { HTMLElementElementProps } from '../index.js'

import { clsx }                         from 'clsx'
import React                            from 'react'

import { fillStyles }                   from '../../styles/index.js'
import { fullViewportHeightStyles }     from '../../styles/index.js'
import { fullViewportWidthStyles }      from '../../styles/index.js'

export const SectionElement = ({
  children,
  fill,
  fullViewportWidth,
  fullViewportHeight,
  sprinkles,
  ref,
  ...props
}: HTMLElementElementProps): ReactNode => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <section
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
    </section>
  )
}
