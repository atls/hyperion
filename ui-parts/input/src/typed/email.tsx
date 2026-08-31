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
  'defaultValue' | 'inputMode' | 'leadingAddon' | 'onChange' | 'pattern' | 'type' | 'value'
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
  onInvalid,
  onValueChange,
  placeholder = 'Enter email',
  spellCheck = false,
  value,
  ...props
}: EmailInputProps): ReactNode => {
  const [invalidValue, setInvalidValue] = useState<string>()
  const state = useStringValue({ defaultValue, onValueChange, value })
  const invalid = invalidValue === state.value
  let resolvedError = error

  if (resolvedError === undefined && invalid) {
    resolvedError = invalidMessage
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setInvalidValue(event.currentTarget.validity.valid ? undefined : event.currentTarget.value)
    onBlur?.(event)
  }

  const handleInvalid: FormEventHandler<HTMLInputElement> = (event) => {
    setInvalidValue(event.currentTarget.value)
    onInvalid?.(event)
  }

  const handleChange: typeof state.onChange = (event) => {
    state.onChange(event)

    if (invalidValue !== undefined) {
      setInvalidValue(event.currentTarget.validity.valid ? undefined : event.currentTarget.value)
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
