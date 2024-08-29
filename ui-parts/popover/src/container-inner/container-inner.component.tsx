import type { FC }              from 'react'
import type { HTMLAttributes }  from 'react'

import React                    from 'react'

import { containerInnerStyles } from './container-inner.css.js'

export const ContainerInner: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className={containerInnerStyles} {...props}>
    {children}
  </div>
)
