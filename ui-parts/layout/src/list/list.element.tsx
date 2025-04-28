import type { ReactNode }        from 'react'

import type { ListElementProps } from './list.interfaces.js'

import { clsx }                  from 'clsx'
import { createElement }         from 'react'

import { fillStyles }            from '../styles/index.js'

export const ListElement = ({
  children,
  sprinkles,
  fill,
  numeric,
  ref,
  ...props
}: ListElementProps): ReactNode => {
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
}
