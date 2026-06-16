import type { ReactNode }         from 'react'

import type { ContainerProps }    from './interfaces.js'

import { containerStyles }        from './styles.css.js'
import { containerContentStyles } from './styles.css.js'
import { containerTitleStyles }   from './styles.css.js'

export const Container = ({
  children,
  className,
  content,
  contentClassName,
  title,
  titleClassName,
}: ContainerProps): ReactNode => (
  <div className={[containerStyles, className].filter(Boolean).join(' ')}>
    <div className={[containerTitleStyles, titleClassName].filter(Boolean).join(' ')}>{title}</div>
    <div className={[containerContentStyles, contentClassName].filter(Boolean).join(' ')}>
      {content}
    </div>
    {children}
  </div>
)
