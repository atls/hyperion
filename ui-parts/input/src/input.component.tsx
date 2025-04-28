'use client'

import type { ReactNode }  from 'react'

import type { InputProps } from './input.interfaces.js'

import React               from 'react'

import { inputStyles }     from './styles/index.js'

export const Input = ({
  size,
  value,
  type = 'text',
  variant = 'blue',
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
    className={inputStyles({
      size,
      variant,
      disabled: disabled ? `${variant}Disabled` : undefined,
    })}
    onChange={onChange}
    {...props}
  />
)
