import type { InputProps }       from '../../interfaces.js'
import type { StringValueProps } from '../shared/index.js'

type EmailNativeProps = Omit<
  InputProps,
  'defaultValue' | 'inputMode' | 'leadingAddon' | 'onChange' | 'type' | 'value'
>

export interface EmailInputProps extends EmailNativeProps, StringValueProps {
  type?: 'email' | 'text'
}
