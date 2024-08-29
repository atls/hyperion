import type { FC }           from 'react'

import type { IconProps }    from './icon.interfaces.js'

import { clsx }              from 'clsx'
import React                 from 'react'

import { spinLoadingStyles } from './icon.css.js'

export const Icon: FC<IconProps> = ({ className, spin, children, ...props }) => (
  <svg className={clsx(className, spin && spinLoadingStyles)} {...props}>
    {children}
  </svg>
)
