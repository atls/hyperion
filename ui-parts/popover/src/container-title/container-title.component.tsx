import { FC }                   from 'react'
import { HTMLAttributes }       from 'react'
import React                    from 'react'

import { containerTitleStyles } from './container-title.css.js'

export const ContainerTitle: FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className={containerTitleStyles} {...props}>
    {children}
  </div>
)
