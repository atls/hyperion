import type { InputHTMLAttributes } from 'react'
import type { CSSProperties }       from 'react'
import type { ReactNode }           from 'react'
import type { Ref }                 from 'react'

import type { InputAppearance }     from './styles/appearance/interfaces.js'

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size' | 'style'>

export type InputShape = string

export interface InputProps extends NativeInputProps {
  appearance?: InputAppearance
  className?: string
  error?: ReactNode
  helperText?: ReactNode
  inputClassName?: string
  inputStyle?: CSSProperties
  leadingAddon?: ReactNode
  ref?: Ref<HTMLInputElement>
  shape?: InputShape
  style?: CSSProperties
  trailingAddon?: ReactNode
}
