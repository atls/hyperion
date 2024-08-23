import React                     from 'react'
import { FC }                    from 'react'
import { clsx }                  from 'clsx'

import { ScalableContentProps }  from './scalable-content.interfaces.js'
import { useScale }              from './hooks/index.js'
import { scalableContentStyles } from './scalable-content.css.js'

export const ScalableContent: FC<ScalableContentProps> = ({ className, style, ...props }) => {
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
