import type { CSSProperties }          from 'react'
import type { ReactNode }              from 'react'
import type { Ref }                    from 'react'
import type { TextareaHTMLAttributes } from 'react'

import type { InputAppearance }        from '../styles/appearance/interfaces.js'
import type { InputShape }             from '../styles/shape/interfaces.js'

type NativeTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style'>

export interface TextareaProps extends NativeTextareaProps {
  appearance?: InputAppearance
  className?: string
  error?: ReactNode
  helperText?: ReactNode
  ref?: Ref<HTMLTextAreaElement>
  shape?: InputShape
  style?: CSSProperties
  textareaClassName?: string
  textareaStyle?: CSSProperties
}
