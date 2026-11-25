import type { ReactNode }           from 'react'

import type { ListboxMessageProps } from './interfaces.js'

import { clsx }                     from 'clsx'

import { messageStyles }            from './styles.css.js'

export const ListboxMessage = ({
  shape,
  appearance,
  children,
  className,
  style,
  ...props
}: ListboxMessageProps): ReactNode => {
  if (children == null || children === false) return null
  const { typography, ...geometry } = shape
  return (
    <li
      {...props}
      role='presentation'
      className={clsx(messageStyles, className)}
      style={{
        ...typography,
        ...geometry,
        ...appearance,
        ...style,
      }}
    >
      <span role='status'>{children}</span>
    </li>
  )
}
