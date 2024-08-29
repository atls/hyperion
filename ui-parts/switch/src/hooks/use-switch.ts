import type { RefObject }            from 'react'

import type { OnChangeCallback }     from './hooks.interfaces.js'
import type { UseSwitchStateResult } from './hooks.interfaces.js'

import { useKeyboard }               from './use-keyboard.js'
import { useSwitchState }            from './use-switch-state.js'

export const useSwitch = (
  node: RefObject<HTMLButtonElement>,
  defaultValue: boolean = false,
  disabled: boolean = false,
  onChange: OnChangeCallback | undefined = undefined
): UseSwitchStateResult => {
  const [checked, setChecked] = useSwitchState(defaultValue, disabled, onChange)

  useKeyboard(node, setChecked)

  return [checked, setChecked]
}
