'use client'

import type { ReactNode }   from 'react'

import type { InputProps }  from './input.interfaces.js'

import { clsx }             from 'clsx'

import { baseStyles }       from './styles/index.js'
import { inputAppearances } from './styles/index.js'
import { inputShapes }      from './styles/index.js'

export const Input = ({
  appearance,
  className,
  size = 'normal',
  shape,
  value,
  type = 'text',
  variant = 'blue',
  disabled,
  onChange,
  ref,
  ...props
}: InputProps): ReactNode => {
  const inputAppearance = appearance || inputAppearances[variant]
  const inputShape = shape || inputShapes[size]

  return (
    <input
      ref={ref}
      value={value}
      type={type}
      disabled={disabled}
      className={clsx(
        baseStyles,
        inputAppearance.default,
        disabled && inputAppearance.disabled,
        inputShape,
        className
      )}
      onChange={onChange}
      {...props}
    />
  )
}
