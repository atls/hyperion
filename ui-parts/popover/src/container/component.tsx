import type { ReactNode }         from 'react'

import type { ContainerProps }    from './interfaces.js'

import { containerStyles }        from './styles.css.js'
import { containerContentStyles } from './styles.css.js'
import { containerTitleStyles }   from './styles.css.js'

const getClassName = (...classNames: Array<string | undefined>): string =>
  classNames.filter(Boolean).join(' ')

export const Container = ({
  appearance,
  children,
  content,
  title,
  shape,
}: ContainerProps): ReactNode => (
  <div className={getClassName(containerStyles, appearance?.root, shape?.root)}>
    <div className={getClassName(containerTitleStyles, appearance?.title, shape?.title)}>
      {title}
    </div>
    <div className={getClassName(containerContentStyles, appearance?.content, shape?.content)}>
      {content}
    </div>
    {children}
  </div>
)
