import type { ReactNode }         from 'react'
import type { PropsWithChildren } from 'react'

import { clsx }                   from 'clsx'

import { baseHandleStyles }       from './handle.css.js'
import { handleSprinkles }        from './handle.css.js'

export const Handle = ({ children, ...props }: PropsWithChildren): ReactNode => {
  const { className, style, otherProps } = handleSprinkles(props)

  return (
    <button
      type='button'
      {...otherProps}
      className={clsx(baseHandleStyles, String(otherProps?.className || ''), className)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </button>
  )
}
