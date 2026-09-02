'use client'

import type { ReactNode }           from 'react'

import type { ClearableInputProps } from './interfaces.js'

import { useImperativeHandle }      from 'react'
import { useRef }                   from 'react'

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
  ref,
  value,
  ...props
}: ClearableInputProps): ReactNode => {
  const inputRef = useRef<HTMLInputElement>(null)
  const state = useStringValue({ defaultValue, onChange, onValueChange, value })

  useImperativeHandle(ref, () => inputRef.current!, [])

  const clear = (): void => {
    if (!inputRef.current) return

    inputRef.current.focus()
    dispatchInputValue(inputRef.current, '')
    onClear?.()
  }

  return (
    <Input
      {...props}
      ref={inputRef}
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
