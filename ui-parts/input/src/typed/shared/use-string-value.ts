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
  normalize = identity,
  onChange,
  onValueChange,
  ref,
  value,
}: UseStringValueOptions): StringValueState => {
  const controlled = value !== undefined
  const inputRef = useRef<HTMLInputElement>(null)
  const normalizedDefaultValue = normalize(defaultValue)
  const [internalValue, setInternalValue] = useState(normalizedDefaultValue)
  const resolvedValue = controlled ? normalize(value) : internalValue
  const inputValueProps = controlled
    ? { value: resolvedValue }
    : { defaultValue: normalizedDefaultValue }

  useImperativeHandle(ref, () => inputRef.current!, [])

  useEffect(() => {
    const input = inputRef.current
    const ownerDocument = input?.ownerDocument

    if (controlled || !input || !ownerDocument) {
      return undefined
    }

    let active = true

    const handleReset = (event: Event): void => {
      if (event.target !== input.form) {
        return
      }

      queueMicrotask(() => {
        if (active && !event.defaultPrevented) {
          setInternalValue(input.value)
        }
      })
    }

    ownerDocument.addEventListener('reset', handleReset, true)

    return () => {
      active = false
      ownerDocument.removeEventListener('reset', handleReset, true)
    }
  }, [controlled])

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
    inputValueProps,
    onChange: handleChange,
    setValue,
    value: resolvedValue,
  }
}
