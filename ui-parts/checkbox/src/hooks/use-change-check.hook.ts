import { useState }            from 'react'
import { useEffect }           from 'react'
import { useCallback }         from 'react'

import { OnChangeCallback }    from './hooks.interfaces'
import { UseCheckStateResult } from './hooks.interfaces'

export const useChangeCheck = (
  defaultValue: boolean = false,
  disabled: boolean = false,
  onChange?: OnChangeCallback
): UseCheckStateResult => {
  const [checked, setChecked] = useState<boolean>(defaultValue)

  useEffect(() => {
    if (defaultValue !== checked) {
      setChecked(defaultValue)
    }
  }, [defaultValue, checked])

  const change = useCallback(
    (nextValue?: boolean | any): void => {
      if (!disabled) {
        const value = nextValue === true || nextValue === false ? nextValue : !checked

        setChecked(value)

        if (onChange) {
          onChange(value)
        }
      }
    },
    [checked, disabled, onChange]
  )

  return [checked, change]
}
