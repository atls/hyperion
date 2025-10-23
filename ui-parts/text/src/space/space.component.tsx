import type { ReactNode }  from 'react'

import type { SpaceProps } from './space.interfaces.js'

import { clsx }            from 'clsx'

import { SYMBOL_SPACE }    from './space.constants.js'
import { spaceSprinkles }  from './space.css.js'

export const Space = ({
  count = 1,
  display = 'inline-flex',
  ref,
  ...props
}: SpaceProps): ReactNode => {
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
}
