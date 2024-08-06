import React                           from 'react'
import { clsx }                        from 'clsx'
import { forwardRef }                  from 'react'

import { TextareaContainerProps }      from './textarea-container.interfaces.js'
import { textareaContainerSprinkles }  from './textarea-container.css.js'
import { baseTextareaContainerStyles } from './textarea-container.css.js'
import { getRoundingStyles }           from './utils/index.js'

export const TextareaContainer = forwardRef<HTMLDivElement, TextareaContainerProps>((
  {
    children,
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
  const roundingStyles = getRoundingStyles(rounding, attach)
  const paddingStyles = {
    size,
    paddingLeft: paddingLeft || `${parseInt(size, 10) * paddingRatio}px`,
    paddingRight: paddingRight || `${parseInt(size, 10) * paddingRatio}px`,
  }

  const { className, style, otherProps } = textareaContainerSprinkles({
    ...props,
    ...paddingStyles,
    ...roundingStyles,
  })

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(className, otherProps?.className, baseTextareaContainerStyles)}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

TextareaContainer.defaultProps = {
  borderWidth: '1px',
}
