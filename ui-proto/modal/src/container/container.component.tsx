import React                   from 'react'
import { PropsWithChildren }   from 'react'

import { baseContainerStyles } from './container.styles.css.js'

const Container: React.FC<PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = ({
  children,
  ...props
}) => {
  return (
    <div className={baseContainerStyles} {...props}>
      {children}
    </div>
  )
}

export { Container }
