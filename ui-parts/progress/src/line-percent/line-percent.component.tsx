import { clsx }                    from 'clsx'
import { forwardRef }              from 'react'
import React                       from 'react'

import { LinePercentProps }        from './line-percent.interfaces.js'
import { baseLinePercentStyles }   from './line-percent.css.js'
import { linePercentSprinkles }    from './line-percent.css.js'
import { roundLinePercentStyles }  from './line-percent.css.js'
import { squareLinePercentStyles } from './line-percent.css.js'

export const LinePercent = forwardRef<HTMLDivElement, LinePercentProps>((
  { children, strokeLinecap = 'square', ...props },
  ref
) => {
  const { className, style, otherProps } = linePercentSprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      className={clsx(
        className,
        otherProps?.className,
        baseLinePercentStyles,
        strokeLinecap === 'round' ? roundLinePercentStyles : squareLinePercentStyles
      )}
      style={{ ...style, ...otherProps?.style }}
    >
      {children}
    </div>
  )
})
