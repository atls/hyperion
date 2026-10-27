import type { ReactNode }        from 'react'

import type { TitleProps }       from './interfaces.js'

import { clsx }                  from 'clsx'

import { titleAppearanceStyles } from './appearance.css.js'
import { titleBaseStyles }       from './base.css.js'

export const Title = ({ children, className, shape, ...props }: TitleProps): ReactNode => (
  <span {...props} className={clsx(titleBaseStyles, titleAppearanceStyles, shape, className)}>
    {children}
  </span>
)
