import { FC }          from 'react'
import { useRef }      from 'react'
import React           from 'react'

import { Handle }      from './handle/index.js'
import { SwitchProps } from './switch.interfaces.js'
import { Thumb }       from './thumb/index.js'
import { useSwitch }   from './hooks/index.js'

export const Switch: FC<SwitchProps> = ({ disabled, checked: defaultValue, onChange }) => {
  const node = useRef<HTMLButtonElement>(null)

  const [checked, setChecked] = useSwitch(node, defaultValue, disabled, onChange)

  return (
    // @ts-expect-error ref prop
    <Handle ref={node} onClick={setChecked}>
      <Thumb disabled={disabled} checked={checked} />
    </Handle>
  )
}
