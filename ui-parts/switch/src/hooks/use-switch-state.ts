/* eslint-disable react-hooks/exhaustive-deps */

import { useCallback }          from 'react'
import { useEffect }            from 'react'
import { useState }             from 'react'

import { OnChangeCallback }     from './interfaces'
import { UseSwitchStateResult } from './interfaces'

export const useSwitchState = (
  defaultValue: boolean = false,
  disabled: boolean = false,
  onChange: OnChangeCallback | undefined
): UseSwitchStateResult => {
  const [checked, setChecked] = useState<boolean>(defaultValue)

  useEffect(() => {
    if (defaultValue !== checked) {
      setChecked(defaultValue)
    }
  }, [defaultValue])

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
