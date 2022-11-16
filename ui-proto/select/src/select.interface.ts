import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  items: string[]
  value?: string
  onChange: (item: string) => void
  placeholder?: string
  disabled?: boolean
}
