import { InputHTMLAttributes }    from 'react'

import { ContainerPositionProps } from './container'
import { OnChangeCallback }       from './hooks'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>,
    ContainerPositionProps {
  onChange?: OnChangeCallback
}
