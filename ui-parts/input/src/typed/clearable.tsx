import type { ReactNode }        from 'react'

import type { InputProps }       from '../interfaces.js'
import type { StringValueProps } from './value.js'

import { CrossIcon }             from '@atls-ui-parts/icons'

import { Input }                 from '../component.js'
import { InputAction }           from './action.js'
import { useStringValue }        from './value.js'

type ClearableNativeProps = Omit<InputProps, 'defaultValue' | 'trailingAddon' | 'value'>

export interface ClearableInputProps extends ClearableNativeProps, StringValueProps {
  clearLabel?: string
  onClear?: () => void
}

export const ClearableInput = ({
  clearLabel = 'Clear input',
  defaultValue,
  disabled,
  onChange,
  onClear,
  onValueChange,
  placeholder = 'Start typing',
  value,
  ...props
}: ClearableInputProps): ReactNode => {
  const state = useStringValue({ defaultValue, onChange, onValueChange, value })

  const clear = (): void => {
    state.setValue('')
    onClear?.()
  }

  return (
    <Input
      {...props}
      disabled={disabled}
      placeholder={placeholder}
      value={state.value}
      trailingAddon={
        state.value ? (
          <InputAction disabled={disabled} label={clearLabel} onClick={clear}>
            <CrossIcon />
          </InputAction>
        ) : undefined
      }
      onChange={state.onChange}
    />
  )
}
