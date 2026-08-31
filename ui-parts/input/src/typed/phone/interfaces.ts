import type { CountryCode }      from 'libphonenumber-js'
import type { ReactNode }        from 'react'

import type { InputProps }       from '../../interfaces.js'
import type { StringValueProps } from '../shared/index.js'

type PhoneNativeProps = Omit<
  InputProps,
  'defaultValue' | 'inputMode' | 'leadingAddon' | 'onChange' | 'type' | 'value'
>

export interface PhoneInputProps extends PhoneNativeProps, StringValueProps {
  defaultCountry?: CountryCode
  invalidMessage?: ReactNode
}
