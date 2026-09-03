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
  onChange,
  onValueChange,
  placeholder = 'Enter email',
  ref,
  spellCheck = false,
  value,
  ...props
}: EmailInputProps): ReactNode => {
  const state = useStringValue({
    defaultValue,
    form: props.form,
    onChange,
    onValueChange,
    ref,
    value,
  })

  return (
    <Input
      {...props}
      ref={state.inputRef}
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
