import type { ReactNode }    from 'react'

import type { MessageProps } from './interfaces.js'

import { clsx }              from 'clsx'

import { messageStyles }     from './styles.css.js'

export const Message = ({
  shape,
  appearance,
  children,
  className,
  style,
  ...props
}: MessageProps): ReactNode => {
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
        borderRadius: shape.borderRadius ?? 'inherit',
        ...appearance,
        ...style,
      }}
    >
      <span role='status'>{children}</span>
    </li>
  )
}
