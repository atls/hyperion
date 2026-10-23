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
  const inputCheckedProps = checked === undefined ? { defaultChecked } : { checked }

  const inputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => inputRef.current!, [])

  useEffect(() => {
    const input = inputRef.current
    if (!input) {
      return
    }

    input.indeterminate = indeterminate ?? false
  }, [indeterminate, localChecked])

  useEffect(() => {
    const input = inputRef.current
    const form = input?.form

    if (checked !== undefined || !input || !form) {
      return undefined
    }

    const handleReset = (): void => {
      queueMicrotask(() => {
        setIsChecked(input.checked)
      })
    }

    form.addEventListener('reset', handleReset)

    return () => {
      form.removeEventListener('reset', handleReset)
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
    inputProps: { ref: inputRef, ...inputCheckedProps, onChange: handleChange },
  }
}
