import type { InputProps }       from '../../interfaces.js'
import type { StringValueProps } from '../shared/index.js'

type PasswordNativeProps = Omit<
  InputProps,
  'defaultValue' | 'leadingAddon' | 'onChange' | 'trailingAddon' | 'type' | 'value'
>

export interface PasswordInputProps extends PasswordNativeProps, StringValueProps {
  defaultVisible?: boolean
  hideLabel?: string
  onVisibilityChange?: (visible: boolean) => void
  showLabel?: string
  visible?: boolean
}
