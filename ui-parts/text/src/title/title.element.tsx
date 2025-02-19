import type { TitleElementProps } from './title.interfaces.js'

import { createElement }          from 'react'
import { forwardRef }             from 'react'
import clsx                       from 'clsx'

export const TitleElement = forwardRef<HTMLHeadingElement, TitleElementProps>((
  { children, sprinkles, level = 1, ...props },
  ref
) => {
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
})
