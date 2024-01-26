import React                 from 'react'
import { FunctionComponent } from 'react'
import { useRef }            from 'react'

import { Handle }            from './handle'
import { SwitchProps }       from './switch.interfaces'
import { Thumb }             from './thumb'
import { useSwitch }         from './hooks'

const Switch: FunctionComponent<SwitchProps> = ({ disabled, checked: defaultValue, onChange }) => {
  const node = useRef<HTMLButtonElement>(null)

  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    <Handle ref={node} onClick={setChecked}>
      <Thumb disabled={disabled} checked={checked} />
    </Handle>
  )
}

export { Switch }
