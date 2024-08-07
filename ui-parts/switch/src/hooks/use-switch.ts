import { RefObject }            from 'react'

import { OnChangeCallback }     from './interfaces.js'
import { UseSwitchStateResult } from './interfaces.js'
import { useKeyboard }          from './use-keyboard.js'
import { useSwitchState }       from './use-switch-state.js'

export const useSwitch = (
  node: RefObject<HTMLButtonElement>,
  defaultValue: boolean = false,
  disabled: boolean = false,
  onChange: OnChangeCallback | undefined
): UseSwitchStateResult => {
  const [checked, setChecked] = useSwitchState(defaultValue, disabled, onChange)

  useKeyboard(node, setChecked)

  return [checked, setChecked]
}
