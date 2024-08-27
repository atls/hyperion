import { clsx }           from 'clsx'
import { forwardRef }     from 'react'
import React              from 'react'

import { SYMBOL_SPACE }   from './space.constants.js'
import { SpaceProps }     from './space.interfaces.js'
import { spaceSprinkles } from './space.css.js'

export const Space = forwardRef<HTMLSpanElement, SpaceProps>(({ count = 1, ...props }, ref) => {
  const { className, style, otherProps } = spaceSprinkles(props)

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {SYMBOL_SPACE.repeat(count)}
    </span>
  )
})

Space.defaultProps = {
  display: 'inline-flex',
}
