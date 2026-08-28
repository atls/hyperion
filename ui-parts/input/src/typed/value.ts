import type { ChangeEventHandler } from 'react'

import { useState }                from 'react'

export interface StringValueProps {
  defaultValue?: string
  onValueChange?: (value: string) => void
  value?: string
}

interface UseStringValueOptions extends StringValueProps {
  normalize?: (value: string) => string
  onChange?: ChangeEventHandler<HTMLInputElement>
}

interface StringValueState {
  onChange: ChangeEventHandler<HTMLInputElement>
  setValue: (value: string) => void
  value: string
}

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

    setValue(normalizedValue)
    onChange?.(event)
  }

  return {
    onChange: handleChange,
    setValue,
    value: resolvedValue,
  }
}
