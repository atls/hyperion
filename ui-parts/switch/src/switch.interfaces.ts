import { OnChangeCallback } from './hooks/index.js'
import { ThumbProps }       from './thumb/index.js'

export interface SwitchCallbackProps {
  onChange?: OnChangeCallback
}

export type SwitchProps = ThumbProps & SwitchCallbackProps
