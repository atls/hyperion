import type { ReactNode }      from 'react'

import type { IndicatorProps } from './indicator.interfaces.js'

import { clsx }                from 'clsx'

import { baseIndicatorStyles } from './indicator.css.js'

export const Indicator = ({ children, className, ref, ...props }: IndicatorProps): ReactNode => (
  <button ref={ref} className={clsx(className, baseIndicatorStyles)} type='button' {...props}>
    {children}
  </button>
)
