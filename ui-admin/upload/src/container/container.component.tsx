import { clsx }                      from 'clsx'
import { forwardRef }                from 'react'
import React                         from 'react'

import { ContainerProps }            from './container.interfaces.js'
import { containerStyles }           from './container.css.js'
import { containerDragAcceptStyles } from './container.css.js'
import { containerDragActiveStyles } from './container.css.js'
import { containerDragRejectStyles } from './container.css.js'

export const Container = forwardRef<HTMLDivElement, ContainerProps>((
  { children, isDragAccept, isDragActive, isDragReject, className, ...props },
  ref
) => (
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
))
