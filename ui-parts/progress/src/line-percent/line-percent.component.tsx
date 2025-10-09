import type { ReactNode }          from 'react'

import type { LinePercentProps }   from './line-percent.interfaces.js'

import { clsx }                    from 'clsx'

import { baseLinePercentStyles }   from './line-percent.css.js'
import { linePercentSprinkles }    from './line-percent.css.js'
import { roundLinePercentStyles }  from './line-percent.css.js'
import { squareLinePercentStyles } from './line-percent.css.js'

export const LinePercent = ({
  children,
  strokeLinecap = 'square',
  ref,
  ...props
}: LinePercentProps): ReactNode => {
  const { className, style, otherProps } = linePercentSprinkles(props)

  return (
    <div
      ref={ref}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(
        className,
        String(otherProps?.className || ''),
        baseLinePercentStyles,
        strokeLinecap === 'round' ? roundLinePercentStyles : squareLinePercentStyles
      )}
    >
      {children}
    </div>
  )
}
