import type { InputHTMLAttributes } from 'react'
import type { Ref }                 from 'react'

export interface RawInputInput extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>
}
