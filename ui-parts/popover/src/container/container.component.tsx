import type { ReactNode }         from 'react'

import type { ContainerProps }    from './container.interfaces.js'

import React                      from 'react'

import { containerStyles }        from './container.css.js'
import { containerContentStyles } from './container.css.js'
import { containerTitleStyles }   from './container.css.js'

export const Container = ({ children, content, title }: ContainerProps): ReactNode => (
  <div className={containerStyles}>
    <div className={containerTitleStyles}>{title}</div>
    <div className={containerContentStyles}>{content}</div>
    {children}
  </div>
)
