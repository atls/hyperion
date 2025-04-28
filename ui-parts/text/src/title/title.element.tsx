import type { ReactNode }         from 'react'

import type { TitleElementProps } from './title.interfaces.js'

import { createElement }          from 'react'
import clsx                       from 'clsx'

export const TitleElement = ({
  children,
  sprinkles,
  level = 1,
  ref,
  ...props
}: TitleElementProps): ReactNode => {
  const { className, style, otherProps } = sprinkles(props)

  return createElement(
    `h${level}`,
    {
      ref,
      ...otherProps,
      className: clsx(className, String(otherProps?.className || '')),
      style: { ...style, ...otherProps?.style },
    },
    children
  )
}
