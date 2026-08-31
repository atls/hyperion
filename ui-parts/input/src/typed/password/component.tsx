'use client'

import type { ReactNode }          from 'react'

import type { PasswordInputProps } from './interfaces.js'

import { useState }                from 'react'

import { EyeClosedIcon }           from '@atls-ui-parts/icons'
import { EyeIcon }                 from '@atls-ui-parts/icons'
import { LockIcon }                from '@atls-ui-parts/icons'

import { InputAction }             from '../../action/index.js'
import { Input }                   from '../../component.js'
import { useStringValue }          from '../shared/index.js'

export const PasswordInput = ({
  autoComplete = 'current-password',
  defaultValue,
  defaultVisible = false,
  disabled,
  hideLabel = 'Hide password',
  onValueChange,
  onVisibilityChange,
  placeholder = 'Enter password',
  showLabel = 'Show password',
  value,
  visible,
  ...props
}: PasswordInputProps): ReactNode => {
  const visibilityControlled = visible !== undefined
  const [internalVisible, setInternalVisible] = useState(defaultVisible)
  const resolvedVisible = visibilityControlled ? visible : internalVisible
  const state = useStringValue({ defaultValue, onValueChange, value })

  const toggleVisibility = (): void => {
    const nextVisible = !resolvedVisible

    if (!visibilityControlled) {
      setInternalVisible(nextVisible)
    }

    onVisibilityChange?.(nextVisible)
  }

  return (
    <Input
      {...props}
      autoComplete={autoComplete}
      disabled={disabled}
      leadingAddon={<LockIcon />}
      placeholder={placeholder}
      type={resolvedVisible ? 'text' : 'password'}
      value={state.value}
      trailingAddon={
        state.value ? (
          <InputAction
            disabled={disabled}
            label={resolvedVisible ? hideLabel : showLabel}
            pressed={resolvedVisible}
            onClick={toggleVisibility}
          >
            {resolvedVisible ? <EyeClosedIcon /> : <EyeIcon />}
          </InputAction>
        ) : undefined
      }
      onChange={state.onChange}
    />
  )
}
