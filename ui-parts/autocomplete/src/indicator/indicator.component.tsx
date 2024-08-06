import React                   from 'react'
import { clsx }                from 'clsx'
import { forwardRef }          from 'react'

import { IndicatorProps }      from './indicator.interfaces.js'
import { baseIndicatorStyles } from './indicator.css.js'

export const Indicator = forwardRef<HTMLButtonElement, IndicatorProps>((
  { children, className, ...props },
  ref
) => (
  <button ref={ref} className={clsx(className, baseIndicatorStyles)} {...props}>
    {children}
  </button>
))
