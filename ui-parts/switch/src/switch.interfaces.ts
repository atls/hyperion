import type { OnChangeCallback } from './hooks/index.js'
import type { ThumbProps }       from './thumb/index.js'

export interface SwitchCallbackProps {
  onChange?: OnChangeCallback
}

export type SwitchProps = SwitchCallbackProps & ThumbProps
