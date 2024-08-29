import type { InputHTMLAttributes } from 'react'

import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'
import React                        from 'react'

import { hiddenInputStyles }        from './hidden-input.css.js'

export const HiddenInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((
  { className, ...props },
  ref
) => <input ref={ref} className={clsx({ className, hiddenInputStyles })} {...props} />)
