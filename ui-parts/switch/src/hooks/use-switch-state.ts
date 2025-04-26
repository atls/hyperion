import type { OnChangeCallback }     from './hooks.interfaces.js'
import type { UseSwitchStateResult } from './hooks.interfaces.js'

import { useEffect }                 from 'react'
import { useState }                  from 'react'

export const useSwitchState = (
  defaultValue: boolean = false,
  disabled: boolean = false,
  onChange: OnChangeCallback | undefined = undefined
): UseSwitchStateResult => {
  const [checked, setChecked] = useState<boolean>(defaultValue)

  useEffect(() => {
    if (defaultValue !== checked) {
      setChecked(defaultValue)
    }
  }, [defaultValue])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const change = (nextValue?: any): void => {
    if (!disabled) {
      const value = typeof nextValue === 'boolean' ? nextValue : !checked

      setChecked(value)

      if (onChange) {
        onChange(value)
      }
    }
  }

  return [checked, change]
}
