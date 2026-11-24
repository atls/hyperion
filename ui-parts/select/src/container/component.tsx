import type { HTMLAttributes } from 'react'
import type { ReactNode }      from 'react'

import { clsx }                from 'clsx'

import { containerStyles }     from './styles/base.css.js'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div {...props} className={clsx(containerStyles, className)} />
)
