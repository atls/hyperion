import React                                from 'react'
import { clsx }                             from 'clsx'
import { forwardRef }                       from 'react'

import { DividedFieldsContainerProps }      from './divided-fields-container.interfaces.js'
import { dividedFieldsContainerSprinkles }  from './divided-fields-container.css.js'
import { baseDividedFieldsContainerStyles } from './divided-fields-container.css.js'

export const DividedFieldsContainer = forwardRef<HTMLDivElement, DividedFieldsContainerProps>((
  { children, paddingLeft, paddingRight, paddingRatio = 0.5, size = '16px', ...props },
  ref
) => {
  const paddingStyles = {
    size,
    paddingLeft: paddingLeft || `${parseInt(size, 10) * paddingRatio}px`,
    paddingRight: paddingRight || `${parseInt(size, 10) * paddingRatio}px`,
  }

  const { className, style, otherProps } = dividedFieldsContainerSprinkles({
    ...props,
    ...paddingStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className, baseDividedFieldsContainerStyles)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

DividedFieldsContainer.defaultProps = {
  borderWidth: '1px',
}
