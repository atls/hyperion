import type { ReactNode }    from 'react'

import type { IconProps }    from './icon.interfaces.js'

import { clsx }              from 'clsx'

import { spinLoadingStyles } from './icon.css.js'

export const Icon = ({ className, spin, children, ...props }: IconProps): ReactNode => (
  <svg className={clsx(className, spin && spinLoadingStyles)} {...props}>
    {children}
  </svg>
)
