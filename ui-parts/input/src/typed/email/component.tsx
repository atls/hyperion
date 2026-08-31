'use client'

import type { ReactNode }       from 'react'

import type { EmailInputProps } from './interfaces.js'

import { EmailIcon }            from '@atls-ui-parts/icons'

import { Input }                from '../../component.js'
import { useStringValue }       from '../shared/index.js'

export const EmailInput = ({
  autoCapitalize = 'none',
  autoComplete = 'email',
  defaultValue,
  onValueChange,
  placeholder = 'Enter email',
  spellCheck = false,
  value,
  ...props
}: EmailInputProps): ReactNode => {
  const state = useStringValue({ defaultValue, onValueChange, value })

  return (
    <Input
      {...props}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      inputMode='email'
      leadingAddon={<EmailIcon />}
      placeholder={placeholder}
      spellCheck={spellCheck}
      type='email'
      value={state.value}
      onChange={state.onChange}
    />
  )
}
