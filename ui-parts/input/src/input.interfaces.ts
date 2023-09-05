import { InputHTMLAttributes } from 'react'
import { FormEventHandler }    from 'react'

import { InputShapeProps }     from './input'
import { OnChangeCallback }    from './value'

export interface InputProps
  extends Omit<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, 'onChange'>,
    InputShapeProps {
  onChange?: OnChangeCallback
  onChangeNative?: FormEventHandler<HTMLInputElement>
}
