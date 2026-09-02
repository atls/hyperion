'use client'

import type { ReactNode }       from 'react'

import type { PhoneInputProps } from './interfaces.js'

import { PhoneIcon }            from '@atls-ui-parts/icons'

import { Input }                from '../../component.js'
import { useStringValue }       from '../shared/index.js'
import { formatPhoneValue }     from './format.js'

export const PhoneInput = ({
  autoComplete = 'tel',
  defaultCountry,
  defaultValue,
  onChange,
  onValueChange,
  placeholder = '+7 (999) 999 99-99',
  value,
  ...props
}: PhoneInputProps): ReactNode => {
  const state = useStringValue({
    defaultValue,
    normalize: (nextValue) => formatPhoneValue(nextValue, defaultCountry),
    onChange,
    onValueChange,
    value,
  })

  return (
    <Input
      {...props}
      autoComplete={autoComplete}
      inputMode='tel'
      leadingAddon={<PhoneIcon />}
      placeholder={placeholder}
      type='tel'
      value={state.value}
      onChange={state.onChange}
    />
  )
}
