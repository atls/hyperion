import type { NavigationProps } from './navigation.interfaces.js'

import { clsx }                 from 'clsx'
import { forwardRef }           from 'react'
import React                    from 'react'

import { baseNavigationStyles } from './navigation.css.js'
import { hideNavigationStyles } from './navigation.css.js'
import { navigationSprinkles }  from './navigation.css.js'
import { showNavigationStyles } from './navigation.css.js'
import { createAttachStyles }   from './navigation.utils.js'
import { createFillStyles }     from './navigation.utils.js'

export const Navigation = forwardRef<HTMLDivElement, NavigationProps>((
  { children, attach = 'prev', fill = false, show = true, offset, ...props },
  ref
) => {
  const fillStyles = createFillStyles(fill, String(props.height))
  const attachStyles = createAttachStyles(attach, offset)

  const { className, style, otherProps } = navigationSprinkles({
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
})

Navigation.defaultProps = {
  borderWidth: 0,
  borderRadius: 0,
}
