import type { IndicatorProps } from './indicator.interfaces.js'

import { clsx }                from 'clsx'
import { forwardRef }          from 'react'
import React                   from 'react'

import { baseIndicatorStyles } from './indicator.css.js'

export const Indicator = forwardRef<HTMLButtonElement, IndicatorProps>((
  { children, className, ...props },
  ref
) => (
  <button ref={ref} className={clsx(className, baseIndicatorStyles)} type='button' {...props}>
    {children}
  </button>
))
