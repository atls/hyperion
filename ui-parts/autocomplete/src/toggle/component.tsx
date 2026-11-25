import type { ReactNode }   from 'react'

import type { ToggleProps } from './interfaces.js'

import { clsx }             from 'clsx'

import { toggleStyles }     from './styles.css.js'
export const Toggle = ({ className, ...props }: ToggleProps): ReactNode => (
  <button {...props} type='button' className={clsx(toggleStyles, className)} />
)
