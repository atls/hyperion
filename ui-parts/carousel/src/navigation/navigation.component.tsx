import type { ReactNode }       from 'react'

import type { NavigationProps } from './navigation.interfaces.js'

import { clsx }                 from 'clsx'
import React                    from 'react'

import { baseNavigationStyles } from './navigation.css.js'
import { hideNavigationStyles } from './navigation.css.js'
import { navigationSprinkles }  from './navigation.css.js'
import { showNavigationStyles } from './navigation.css.js'
import { createAttachStyles }   from './navigation.utils.js'
import { createFillStyles }     from './navigation.utils.js'

export const Navigation = ({
  children,
  attach = 'prev',
  fill = false,
  show = true,
  offset,
  borderWidth = 0,
  borderRadius = 0,
  ref,
  ...props
}: NavigationProps): ReactNode => {
  const fillStyles = createFillStyles(fill, String(props.height))
  const attachStyles = createAttachStyles(attach, offset)

  const { className, style, otherProps } = navigationSprinkles({
    borderWidth,
    borderRadius,
    ...props,
    ...fillStyles,
    ...attachStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(
        className,
        String(otherProps?.className || ''),
        baseNavigationStyles,
        show ? showNavigationStyles : hideNavigationStyles
      )}
    >
      {children}
    </div>
  )
}
