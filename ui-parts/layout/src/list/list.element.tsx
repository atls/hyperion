import type { ListElementProps } from './list.interfaces.js'

import { clsx }                  from 'clsx'
import { createElement }         from 'react'
import { forwardRef }            from 'react'

import { fillStyles }            from '../styles/index.js'

export const ListElement = forwardRef<HTMLUListElement, ListElementProps>((
  { children, sprinkles, fill, numeric, ...props },
  ref
) => {
  const { className, style, otherProps } = sprinkles(props)

  return createElement(
    numeric ? 'ol' : 'ul',
    {
      ref,
      ...otherProps,
      style: { ...style, ...otherProps?.style },
      className: clsx(className, String(otherProps?.className || ''), fill && fillStyles),
    },
    children
  )
})
