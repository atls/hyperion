import type { ReactNode }       from 'react'
import type { HTMLAttributes }  from 'react'

import { containerTitleStyles } from './container-title.css.js'

export const ContainerTitle = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div className={containerTitleStyles} {...props}>
    {children}
  </div>
)
