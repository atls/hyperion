import type { InputProps }       from '../../interfaces.js'
import type { StringValueProps } from '../shared/index.js'

type EmailNativeProps = Omit<
  InputProps,
  'defaultValue' | 'inputMode' | 'leadingAddon' | 'onChange' | 'type' | 'value'
>

export type EmailInputProps = EmailNativeProps & StringValueProps
