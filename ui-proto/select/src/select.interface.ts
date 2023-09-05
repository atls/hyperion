import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  items: string[]
  onChange: (item: string) => void
  value?: string
  placeholder?: string
  disabled?: boolean
}
