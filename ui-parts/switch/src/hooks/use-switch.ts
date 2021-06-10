import { RefObject }                              from 'react'

import { OnChangeCallback, UseSwitchStateResult } from './interfaces'
import { useKeyboard }                            from './use-keyboard'
import { useSwitchState }                         from './use-switch-state'

export const useSwitch = (
  node: RefObject<HTMLButtonElement>,
  defaultValue: boolean = false,
  disabled: boolean = false,
  onChange: OnChangeCallback
): UseSwitchStateResult => {
  const [checked, setChecked] = useSwitchState(defaultValue, disabled, onChange)

  useKeyboard(node, setChecked)

  return [checked, setChecked]
}
