import React                         from 'react'
import { clsx }                      from 'clsx'
import { forwardRef }                from 'react'

import { AddonProps }                from './addon.interfaces.js'
import { addonSprinkles }            from './addon.css.js'
import { addonPositionAfterStyles }  from './addon.css.js'
import { addonPositionBeforeStyles } from './addon.css.js'
import { baseAddonStyles }           from './addon.css.js'
import { getRoundingStyles }         from './utils/index.js'

export const Addon = forwardRef<HTMLDivElement, AddonProps>((
  {
    children,
    position = 'before',
    attach = 'left',
    paddingLeft,
    paddingRight,
    paddingRatio = 0.5,
    rounding = '0',
    size = '16px',
    ...props
  },
  ref
) => {
  const roundingStyles = getRoundingStyles(rounding, position)

  const paddingStyles = {
    size,
    paddingLeft: paddingLeft || `${parseInt(size, 10) * paddingRatio}px`,
    paddingRight: paddingRight || `${parseInt(size, 10) * paddingRatio}px`,
  }

  const { className, style, otherProps } = addonSprinkles({
    ...props,
    ...paddingStyles,
    ...roundingStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseAddonStyles,
        position === 'before' ? addonPositionBeforeStyles : addonPositionAfterStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

Addon.defaultProps = {
  borderWidth: '1px',
}
