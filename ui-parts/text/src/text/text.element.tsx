import type { ReactNode }        from 'react'

import type { TextElementProps } from './text.interfaces.js'

import { clsx }                  from 'clsx'

export const TextElement = ({
  children,
  sprinkles,
  ref,
  ...props
}: TextElementProps): ReactNode => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <span
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </span>
  )
}
