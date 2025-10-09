import type { ReactNode }            from 'react'

import type { ContainerProps }       from './container.interfaces.js'

import { clsx }                      from 'clsx'

import { containerStyles }           from './container.css.js'
import { containerDragAcceptStyles } from './container.css.js'
import { containerDragActiveStyles } from './container.css.js'
import { containerDragRejectStyles } from './container.css.js'

export const Container = ({
  children,
  isDragAccept,
  isDragActive,
  isDragReject,
  className,
  ref,
  ...props
}: ContainerProps): ReactNode => (
  <div
    ref={ref}
    className={clsx(
      className,
      containerStyles,
      isDragAccept && containerDragAcceptStyles,
      isDragActive && containerDragActiveStyles,
      isDragReject && containerDragRejectStyles
    )}
    {...props}
  >
    {children}
  </div>
)
