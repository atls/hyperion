import React                   from 'react'
import { PropsWithChildren }   from 'react'

import { baseContainerStyles } from './container.styles.css.js'

export const Container: React.FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => (
  <div className={baseContainerStyles} {...props}>
    {children}
  </div>
)
