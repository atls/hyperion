import type { InputHTMLAttributes } from 'react'
import type { ReactNode }           from 'react'
import type { Ref }                 from 'react'

import type { InputAppearance }     from './styles/appearance/interfaces.js'

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

export type InputShape = string

export interface InputProps extends NativeInputProps {
  appearance?: InputAppearance
  error?: ReactNode
  helperText?: ReactNode
  leadingAddon?: ReactNode
  ref?: Ref<HTMLInputElement>
  shape?: InputShape
  trailingAddon?: ReactNode
}
