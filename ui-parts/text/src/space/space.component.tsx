import type { SpaceProps } from './space.interfaces.js'

import { clsx }            from 'clsx'
import { forwardRef }      from 'react'
import React               from 'react'

import { SYMBOL_SPACE }    from './space.constants.js'
import { spaceSprinkles }  from './space.css.js'

export const Space = forwardRef<HTMLSpanElement, SpaceProps>((
  { count = 1, display = 'inline-flex', ...props },
  ref
) => {
  const { className, style, otherProps } = spaceSprinkles({ display, ...props })

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style }}
    >
      {SYMBOL_SPACE.repeat(count)}
    </span>
  )
})
