import type { ReactNode }       from 'react'

import type { IconProps }       from './interfaces.js'

import { clsx }                 from 'clsx'

import { iconAppearanceStyles } from './appearance.css.js'
import { iconBaseStyles }       from './base.css.js'

export const Icon = ({ children, className, shape, ...props }: IconProps): ReactNode => (
  <span {...props} className={clsx(iconBaseStyles, iconAppearanceStyles, shape, className)}>
    {children}
  </span>
)
