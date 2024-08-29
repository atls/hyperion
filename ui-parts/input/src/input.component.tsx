'use client'

import type { InputProps } from './input.interfaces.js'

import { forwardRef }      from 'react'
import React               from 'react'

import { inputStyles }     from './styles/index.js'

export const Input = forwardRef<HTMLInputElement, InputProps>((
  { size, value, type = 'text', variant = 'blue', disabled, onChange, ...props },
  ref
) => (
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
))
