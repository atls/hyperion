import { OnChangeCallback }  from './hooks'
import { ThumbElementProps } from './thumb'

export interface SwitchCallbackProps {
  onChange?: OnChangeCallback
}

export type SwitchProps = ThumbElementProps & SwitchCallbackProps
