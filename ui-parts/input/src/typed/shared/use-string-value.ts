import type { ChangeEventHandler }    from 'react'

import type { StringValueState }      from './interfaces.js'
import type { UseStringValueOptions } from './interfaces.js'

import { useState }                   from 'react'

const identity = (value: string): string => value

export const useStringValue = ({
  defaultValue = '',
  normalize = identity,
  onChange,
  onValueChange,
  value,
}: UseStringValueOptions): StringValueState => {
  const controlled = value !== undefined
  const [internalValue, setInternalValue] = useState(() => normalize(defaultValue))
  const resolvedValue = controlled ? normalize(value) : internalValue

  const setValue = (nextValue: string): void => {
    const normalizedValue = normalize(nextValue)

    if (!controlled) {
      setInternalValue(normalizedValue)
    }

    onValueChange?.(normalizedValue)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const normalizedValue = normalize(event.currentTarget.value)

    if (normalizedValue !== event.currentTarget.value) {
      event.currentTarget.value = normalizedValue
    }

    onChange?.(event)
    setValue(normalizedValue)
  }

  return {
    onChange: handleChange,
    setValue,
    value: resolvedValue,
  }
}
