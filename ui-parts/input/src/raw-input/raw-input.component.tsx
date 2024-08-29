import type { InputHTMLAttributes } from 'react'

import { clsx }                     from 'clsx'
import { forwardRef }               from 'react'
import React                        from 'react'

import { rawInputStyles }           from './raw-input.css.js'

export const RawInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((
  { className, ...props },
  ref
) => <input ref={ref} className={clsx(className, rawInputStyles)} {...props} />)
