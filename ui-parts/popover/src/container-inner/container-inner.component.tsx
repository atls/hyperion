import type { ReactNode }       from 'react'
import type { HTMLAttributes }  from 'react'

import { containerInnerStyles } from './container-inner.css.js'

export const ContainerInner = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={containerInnerStyles} {...props}>
    {children}
  </div>
)
