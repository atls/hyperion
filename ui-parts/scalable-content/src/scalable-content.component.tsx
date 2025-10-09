import type { ReactNode }            from 'react'

import type { ScalableContentProps } from './scalable-content.interfaces.js'

import { clsx }                      from 'clsx'

import { useScale }                  from './hooks/index.js'
import { scalableContentStyles }     from './scalable-content.css.js'

export const ScalableContent = ({
  className,
  style,
  ...props
}: ScalableContentProps): ReactNode => {
  const { ref, style: scaleStyle } = useScale()

  return (
    <div
      ref={ref}
      className={clsx(scalableContentStyles, className)}
      style={{ ...style, ...scaleStyle }}
      {...props}
    />
  )
}
