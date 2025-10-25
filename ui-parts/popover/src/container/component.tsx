import type { ReactNode }         from 'react'

import type { ContainerProps }    from './interfaces.js'

import { containerStyles }        from './styles.css.js'
import { containerContentStyles } from './styles.css.js'
import { containerTitleStyles }   from './styles.css.js'

export const Container = ({ children, content, title }: ContainerProps): ReactNode => (
  <div className={containerStyles}>
    <div className={containerTitleStyles}>{title}</div>
    <div className={containerContentStyles}>{content}</div>
    {children}
  </div>
)
