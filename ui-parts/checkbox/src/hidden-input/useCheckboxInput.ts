import type { ChangeEvent }    from 'react'

import type { CheckboxProps }  from '../checkbox.interfaces.js'

import { useEffect }           from 'react'
import { useImperativeHandle } from 'react'
import { useRef }              from 'react'
import { useState }            from 'react'

export const useCheckboxInput = ({
  checked,
  defaultChecked = false,
  indeterminate,
  onChange,
  ref,
}: Pick<CheckboxProps, 'checked' | 'defaultChecked' | 'indeterminate' | 'onChange' | 'ref'>) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? defaultChecked)
  const localChecked = checked ?? isChecked

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => inputRef.current!, [])

  useEffect(() => {
    const input = inputRef.current
    if (!input) {
      return
    }

    input.indeterminate = indeterminate ?? false

    if (checked === undefined) {
      input.defaultChecked = defaultChecked
    }
  }, [checked, defaultChecked, indeterminate, localChecked])

  useEffect(() => {
    const input = inputRef.current
    const ownerDocument = input?.ownerDocument

    if (checked !== undefined || !input || !ownerDocument) {
      return undefined
    }

    let active = true

    const handleReset = (event: Event): void => {
      if (event.target !== input.form) {
        return
      }

      queueMicrotask(() => {
        if (active && !event.defaultPrevented) {
          setIsChecked(input.checked)
        }
      })
    }

    ownerDocument.addEventListener('reset', handleReset, true)

    return () => {
      active = false
      ownerDocument.removeEventListener('reset', handleReset, true)
    }
  }, [checked])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextChecked = event.currentTarget.checked

    if (checked === undefined) {
      setIsChecked(nextChecked)
    }
    onChange?.(event)
  }

  return {
    checked: localChecked,
    inputProps: { ref: inputRef, checked: localChecked, onChange: handleChange },
  }
}
