import type { ReactNode }             from 'react'

import type { ContainerProps }        from './interfaces.js'

import { clsx }                       from 'clsx'

import { containerBaseStyles }        from './base.css.js'
import { getContainerPositionStyles } from './position.js'

export const Container = ({
  children,
  className,
  hasDescription,
  hasTitle,
  horizontalMinHeight,
  ref,
  style,
  textPosition,
  ...props
}: ContainerProps): ReactNode => (
  <div
    ref={ref}
    {...props}
    className={clsx(
      containerBaseStyles,
      getContainerPositionStyles(textPosition, hasTitle, hasDescription),
      className
    )}
    style={{
      minHeight:
        (textPosition === 'left' || textPosition === 'right') && (hasTitle || hasDescription)
          ? horizontalMinHeight
          : undefined,
      ...style,
    }}
  >
    {children}
  </div>
)
