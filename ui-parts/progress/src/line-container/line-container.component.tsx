import React                         from 'react'
import clsx                          from 'clsx'
import { forwardRef }                from 'react'

import { LineContainerProps }        from './line-container.interfaces.js'
import { baseLineContainerStyles }   from './line-container.css.js'
import { lineContainerSprinkles }    from './line-container.css.js'
import { roundLineContainerStyles }  from './line-container.css.js'
import { squareLineContainerStyles } from './line-container.css.js'

export const LineContainer = forwardRef<HTMLDivElement, LineContainerProps>((
  { children, trailLinecap = 'square', ...props },
  ref
) => {
  const { className, style, otherProps } = lineContainerSprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseLineContainerStyles,
        trailLinecap === 'round' ? roundLineContainerStyles : squareLineContainerStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})

LineContainer.defaultProps = {
  backgroundColor: '$gray',
}
