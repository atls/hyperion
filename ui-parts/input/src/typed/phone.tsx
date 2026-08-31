import type { CountryCode }       from 'libphonenumber-js'
import type { FocusEventHandler } from 'react'
import type { FormEventHandler }  from 'react'
import type { ReactNode }         from 'react'

import type { InputProps }        from '../interfaces.js'
import type { StringValueProps }  from './value.js'

import { useState }               from 'react'

import { PhoneIcon }              from '@atls-ui-parts/icons'

import { Input }                  from '../component.js'
import { formatPhoneValue }       from './phone-format.js'
import { isPhoneValueValid }      from './phone-format.js'
import { useStringValue }         from './value.js'

type PhoneNativeProps = Omit<
  InputProps,
  'defaultValue' | 'inputMode' | 'leadingAddon' | 'onChange' | 'type' | 'value'
>

export interface PhoneInputProps extends PhoneNativeProps, StringValueProps {
  defaultCountry?: CountryCode
  invalidMessage?: ReactNode
}

export const PhoneInput = ({
  autoComplete = 'tel',
  defaultCountry,
  defaultValue,
  error,
  invalidMessage = 'Invalid phone',
  onBlur,
  onInvalid,
  onValueChange,
  placeholder = '+7 (999) 999 99-99',
  value,
  ...props
}: PhoneInputProps): ReactNode => {
  const [invalidValue, setInvalidValue] = useState<string>()
  const state = useStringValue({
    defaultValue,
    normalize: (nextValue) => formatPhoneValue(nextValue, defaultCountry),
    onValueChange,
    value,
  })
  const invalid = invalidValue === state.value
  let resolvedError = error

  if (resolvedError === undefined && invalid) {
    resolvedError = invalidMessage
  }

  const isValid = (input: HTMLInputElement): boolean =>
    input.validity.valid &&
    (input.value.length === 0 || isPhoneValueValid(input.value, defaultCountry))

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    setInvalidValue(isValid(event.currentTarget) ? undefined : event.currentTarget.value)
    onBlur?.(event)
  }

  const handleInvalid: FormEventHandler<HTMLInputElement> = (event) => {
    setInvalidValue(event.currentTarget.value)
    onInvalid?.(event)
  }

  const handleChange: typeof state.onChange = (event) => {
    state.onChange(event)

    if (invalidValue !== undefined) {
      setInvalidValue(isValid(event.currentTarget) ? undefined : event.currentTarget.value)
    }
  }

  return (
    <Input
      {...props}
      autoComplete={autoComplete}
      error={resolvedError}
      inputMode='tel'
      leadingAddon={<PhoneIcon />}
      placeholder={placeholder}
      type='tel'
      value={state.value}
      onBlur={handleBlur}
      onChange={handleChange}
      onInvalid={handleInvalid}
    />
  )
}
