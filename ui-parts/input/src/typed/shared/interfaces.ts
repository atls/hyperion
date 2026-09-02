import type { ChangeEventHandler } from 'react'

export interface StringValueProps {
  defaultValue?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onValueChange?: (value: string) => void
  value?: string
}

export interface UseStringValueOptions extends StringValueProps {
  normalize?: (value: string) => string
}

export interface StringValueState {
  onChange: ChangeEventHandler<HTMLInputElement>
  setValue: (value: string) => void
  value: string
}
