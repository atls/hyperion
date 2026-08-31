import type { InputHTMLAttributes } from 'react'
import type { CSSProperties }       from 'react'
import type { ReactNode }           from 'react'
import type { Ref }                 from 'react'

import type { InputAppearance }     from './styles/appearance/interfaces.js'
import type { InputShape }          from './styles/shape/interfaces.js'

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size' | 'style'>

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
