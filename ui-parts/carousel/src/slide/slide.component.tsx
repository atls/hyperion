import { FC }             from 'react'
import { HTMLAttributes } from 'react'
import { clsx }           from 'clsx'
import React              from 'react'

import { slideStyles }    from './slide.css.js'

export const Slide: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => (
  <div className={clsx(className, slideStyles)} {...props}>
    {children}
  </div>
)
