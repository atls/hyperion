'use client'

import type { ReactNode }   from 'react'

import type { InputProps }  from './input.interfaces.js'

import { clsx }             from 'clsx'

import { baseStyles }       from './styles/index.js'
import { inputAppearances } from './styles/index.js'
import { inputShapes }      from './styles/index.js'

export const Input = ({
  appearance = inputAppearances.blue,
  className,
  shape = inputShapes.normal,
  value,
  type = 'text',
  disabled,
  onChange,
  ref,
  ...props
}: InputProps): ReactNode => (
  <input
    ref={ref}
    value={value}
    type={type}
    disabled={disabled}
    className={clsx(
      baseStyles,
      appearance.default,
      disabled && appearance.disabled,
      shape,
      className
    )}
    onChange={onChange}
    {...props}
  />
)
