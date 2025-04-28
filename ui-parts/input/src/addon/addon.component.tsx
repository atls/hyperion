import type { ReactNode }            from 'react'

import type { AddonProps }           from './addon.interfaces.js'

import { clsx }                      from 'clsx'
import React                         from 'react'

import { addonSprinkles }            from './addon.css.js'
import { addonPositionAfterStyles }  from './addon.css.js'
import { addonPositionBeforeStyles } from './addon.css.js'
import { baseAddonStyles }           from './addon.css.js'
import { getRoundingStyles }         from './utils/index.js'

export const Addon = ({
  children,
  position = 'before',
  attach = 'left',
  paddingLeft,
  paddingRight,
  paddingRatio = 0.5,
  rounding = '0',
  size = '16px',
  borderWidth = '1px',
  ref,
  ...props
}: AddonProps): ReactNode => {
  const roundingStyles = getRoundingStyles(rounding, position)
  const paddingStyles = {
    size,
    paddingLeft: paddingLeft || `${parseInt(size, 10) * paddingRatio}px`,
    paddingRight: paddingRight || `${parseInt(size, 10) * paddingRatio}px`,
  }

  const { className, style, otherProps } = addonSprinkles({
    borderWidth,
    ...props,
    ...paddingStyles,
    ...roundingStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(
        className,
        String(otherProps?.className || ''),
        baseAddonStyles,
        position === 'before' ? addonPositionBeforeStyles : addonPositionAfterStyles
      )}
    >
      {children}
    </div>
  )
}
