'use client'

import type { ReactNode }           from 'react'

import type { ClearableInputProps } from './interfaces.js'

import { CrossIcon }                from '@atls-ui-parts/icons'

import { InputAction }              from '../../action/index.js'
import { Input }                    from '../../component.js'
import { useStringValue }           from '../shared/index.js'

const dispatchInputValue = (input: HTMLInputElement, value: string): void => {
  const view = input.ownerDocument.defaultView
  const inputPrototype = view?.HTMLInputElement.prototype ?? HTMLInputElement.prototype
  const valueSetter = Object.getOwnPropertyDescriptor(inputPrototype, 'value')?.set

  if (valueSetter) {
    valueSetter.call(input, value)
  } else {
    input.value = value
  }

  input.dispatchEvent(new (view?.Event ?? Event)('input', { bubbles: true }))
}

export const ClearableInput = ({
  clearLabel = 'Clear input',
  defaultValue,
  disabled,
  onClear,
  onChange,
  onValueChange,
  placeholder = 'Start typing',
  readOnly,
  ref,
  value,
  ...props
}: ClearableInputProps): ReactNode => {
  const state = useStringValue({ defaultValue, onChange, onValueChange, ref, value })

  const clear = (): void => {
    if (disabled || readOnly || !state.inputRef.current) return

    state.inputRef.current.focus()
    dispatchInputValue(state.inputRef.current, '')
    onClear?.()
  }

  return (
    <Input
      {...props}
      ref={state.inputRef}
      disabled={disabled}
      placeholder={placeholder}
      readOnly={readOnly}
      value={state.value}
      trailingAddon={
        state.value ? (
          <InputAction disabled={disabled || readOnly} label={clearLabel} onClick={clear}>
            <CrossIcon />
          </InputAction>
        ) : undefined
      }
      onChange={state.onChange}
    />
  )
}
