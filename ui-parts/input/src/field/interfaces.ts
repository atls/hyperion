import type { HTMLAttributes }        from 'react'
import type { ReactElement }          from 'react'

import type { InputAnimation }        from '../animation/interfaces.js'
import type { InputAppearanceStates } from '../styles/appearance/interfaces.js'
import type { InputFieldShape }       from './styles/shape/interfaces.js'
export interface InputFieldElementProps extends HTMLAttributes<HTMLElement> {
  'data-disabled'?: boolean
  'data-error'?: boolean
  'data-filled'?: boolean
}
export interface InputFieldProps {
  children: ReactElement<InputFieldElementProps>
  appearance: InputAppearanceStates
  shape?: InputFieldShape
  disabled?: boolean
  error?: boolean
  filled?: boolean
  animation?: InputAnimation
}
