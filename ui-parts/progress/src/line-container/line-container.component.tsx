import type { ReactNode }            from 'react'

import type { LineContainerProps }   from './line-container.interfaces.js'

import { clsx }                      from 'clsx'

import { baseLineContainerStyles }   from './line-container.css.js'
import { lineContainerSprinkles }    from './line-container.css.js'
import { roundLineContainerStyles }  from './line-container.css.js'
import { squareLineContainerStyles } from './line-container.css.js'

export const LineContainer = ({
  children,
  trailLinecap = 'square',
  backgroundColor = '$gray',
  ref,
  ...props
}: LineContainerProps): ReactNode => {
  const { className, style, otherProps } = lineContainerSprinkles({ backgroundColor, ...props })

  return (
    <div
      ref={ref}
      {...otherProps}
      style={{ ...style, ...otherProps?.style }}
      className={clsx(
        className,
        String(otherProps?.className || ''),
        baseLineContainerStyles,
        trailLinecap === 'round' ? roundLineContainerStyles : squareLineContainerStyles
      )}
    >
      {children}
    </div>
  )
}
