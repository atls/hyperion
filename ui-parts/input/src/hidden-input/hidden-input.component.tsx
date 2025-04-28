import type { ReactNode }        from 'react'

import type { HiddenInputProps } from './hidden-input.interfaces.js'

import { clsx }                  from 'clsx'
import React                     from 'react'

import { hiddenInputStyles }     from './hidden-input.css.js'

export const HiddenInput = ({ className, ref, ...props }: HiddenInputProps): ReactNode => (
  <input ref={ref} className={clsx({ className, hiddenInputStyles })} {...props} />
)
