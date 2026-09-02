import type { ChangeEventHandler } from 'react'
import type { Ref }                from 'react'
import type { RefObject }          from 'react'

export interface StringValueProps {
  defaultValue?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onValueChange?: (value: string) => void
  value?: string
}

export interface UseStringValueOptions extends StringValueProps {
  normalize?: (value: string) => string
  ref?: Ref<HTMLInputElement>
}

export interface StringValueState {
  inputRef: RefObject<HTMLInputElement | null>
  onChange: ChangeEventHandler<HTMLInputElement>
  setValue: (value: string) => void
  value: string
}
