import type { ReactNode }             from 'react'

import type { ParagraphElementProps } from './paragraph.interfaces.js'

import { clsx }                       from 'clsx'

export const ParagraphElement = ({
  children,
  sprinkles,
  ref,
  ...props
}: ParagraphElementProps): ReactNode => {
  const { className, style, otherProps } = sprinkles(props)

  return (
    <p
      ref={ref}
      {...otherProps}
      className={clsx(className, String(otherProps?.className || ''))}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </p>
  )
}
