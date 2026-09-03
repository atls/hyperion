import type { InputProps }       from '../../interfaces.js'
import type { StringValueProps } from '../shared/index.js'

type ClearableNativeProps = Omit<
  InputProps,
  'defaultValue' | 'onChange' | 'trailingAddon' | 'type' | 'value'
>

export interface ClearableInputProps extends ClearableNativeProps, StringValueProps {
  clearLabel?: string
  onClear?: () => void
}
