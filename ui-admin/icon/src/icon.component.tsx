import React                 from 'react'
import clsx                  from 'clsx'
import { FC }                from 'react'

import { IconProps }         from './icon.interfaces.js'
import { spinLoadingStyles } from './icon.css.js'

export const Icon: FC<IconProps> = ({ className, spin, children, ...props }) => (
  <svg className={clsx(className, spin && spinLoadingStyles)} {...props}>
    {children}
  </svg>
)
