import { HTMLAttributes } from 'react'
import { ReactNode }      from 'react'

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  onCheck: (checked: boolean) => void
  active: boolean
  labelPosition?: 'start' | 'top' | 'end' | 'bottom'
  size?: 'small' | 'medium' | 'large'
  color?: 'blue' | 'green' | 'red'
  icon?: ReactNode
}
