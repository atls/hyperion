import type { InputHTMLAttributes } from 'react'
import type { Ref }                 from 'react'

export interface HiddenInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>
}
