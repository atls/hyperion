import type { ChangeEventHandler }    from 'react'

import type { StringValueState }      from './interfaces.js'
import type { UseStringValueOptions } from './interfaces.js'

import { useEffect }                  from 'react'
import { useImperativeHandle }        from 'react'
import { useRef }                     from 'react'
import { useState }                   from 'react'

const identity = (value: string): string => value

export const useStringValue = ({
  defaultValue = '',
  form: formId,
  normalize = identity,
  onChange,
  onValueChange,
  ref,
  value,
}: UseStringValueOptions): StringValueState => {
  const controlled = value !== undefined
  const inputRef = useRef<HTMLInputElement>(null)
  const [internalValue, setInternalValue] = useState(() => normalize(defaultValue))
  const resolvedValue = controlled ? normalize(value) : internalValue

  useImperativeHandle(ref, () => inputRef.current!, [])

  useEffect(() => {
    const form = inputRef.current?.form

    if (controlled || !form) {
      return undefined
    }

    let active = true

    const handleReset = (event: Event): void => {
      queueMicrotask(() => {
        if (active && !event.defaultPrevented) {
          setInternalValue(normalize(defaultValue))
        }
      })
    }

    form.addEventListener('reset', handleReset)

    return () => {
      active = false
      form.removeEventListener('reset', handleReset)
    }
  }, [controlled, defaultValue, formId, normalize])

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
    inputRef,
    onChange: handleChange,
    setValue,
    value: resolvedValue,
  }
}
