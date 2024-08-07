import { OnChangeCallback }  from './hooks/index.js'
import { ThumbElementProps } from './thumb/index.js'

export interface SwitchCallbackProps {
  onChange?: OnChangeCallback
}

export type SwitchProps = ThumbElementProps & SwitchCallbackProps
