import { InputHTMLAttributes } from 'react'

export interface SelectProps extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  onChange: (item: string) => void
  items: string[]
  value?: string
  placeholder?: string
  disabled?: boolean
}
