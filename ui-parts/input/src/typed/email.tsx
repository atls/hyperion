import type { FocusEventHandler } from 'react'
import type { FormEventHandler }  from 'react'
import type { ReactNode }         from 'react'

import type { InputProps }        from '../interfaces.js'
import type { StringValueProps }  from './value.js'

import { useState }               from 'react'

import { EmailIcon }              from '@atls-ui-parts/icons'

import { Input }                  from '../component.js'
import { useStringValue }         from './value.js'

const EMAIL_PATTERN = '[^\\s@]+@[^\\s@]+\\.[^\\s@]+'

type EmailNativeProps = Omit<
  InputProps,
  'defaultValue' | 'inputMode' | 'leadingAddon' | 'pattern' | 'type' | 'value'
>

export interface EmailInputProps extends EmailNativeProps, StringValueProps {
  invalidMessage?: ReactNode
}

export const EmailInput = ({
  autoCapitalize = 'none',
  autoComplete = 'email',
  defaultValue,
  error,
  invalidMessage = 'Invalid email',
  onBlur,
  onChange,
  onInvalid,
  onValueChange,
  placeholder = 'Enter email',
  spellCheck = false,
  value,
  ...props
}: EmailInputProps): ReactNode => {
  const [invalid, setInvalid] = useState(false)
  let resolvedError = error

  if (resolvedError === undefined && invalid) {
    resolvedError = invalidMessage
  }

  const state = useStringValue({ defaultValue, onChange, onValueChange, value })

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setInvalid(!event.currentTarget.validity.valid)
    onBlur?.(event)
  }

  const handleInvalid: FormEventHandler<HTMLInputElement> = (event) => {
    setInvalid(true)
    onInvalid?.(event)
  }

  const handleChange: typeof state.onChange = (event) => {
    state.onChange(event)

    if (invalid) {
      setInvalid(!event.currentTarget.validity.valid)
    }
  }

  return (
    <Input
      {...props}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      error={resolvedError}
      inputMode='email'
      leadingAddon={<EmailIcon />}
      pattern={EMAIL_PATTERN}
      placeholder={placeholder}
      spellCheck={spellCheck}
      type='email'
      value={state.value}
      onBlur={handleBlur}
      onChange={handleChange}
      onInvalid={handleInvalid}
    />
  )
}
