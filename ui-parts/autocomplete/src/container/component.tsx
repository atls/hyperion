import type { ComponentPropsWithRef } from 'react'
import type { ReactNode }             from 'react'

import { clsx }                       from 'clsx'

import { containerStyles }            from './styles/base.css.js'
export const Container = ({ className, ...props }: ComponentPropsWithRef<'div'>): ReactNode => (
  <div {...props} className={clsx(containerStyles, className)} />
)
