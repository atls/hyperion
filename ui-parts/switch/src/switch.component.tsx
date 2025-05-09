import type { ReactNode }   from 'react'

import type { SwitchProps } from './switch.interfaces.js'

import { useRef }           from 'react'
import React                from 'react'

import { Handle }           from './handle/index.js'
import { Thumb }            from './thumb/index.js'
import { useSwitch }        from './hooks/index.js'

export const Switch = ({ disabled, checked: defaultValue, onChange }: SwitchProps): ReactNode => {
  const node = useRef<HTMLButtonElement>(null)

  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    // @ts-expect-error correct ref prop
    <Handle ref={node} onClick={setChecked}>
      <Thumb disabled={disabled} checked={checked} />
    </Handle>
  )
}
