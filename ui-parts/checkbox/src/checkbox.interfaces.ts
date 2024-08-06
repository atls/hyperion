import { PropsWithChildren } from 'react'

export interface CheckboxProps extends PropsWithChildren {
  onCheck: (checked: boolean) => void
  active: boolean
  labelPosition?: 'start' | 'top' | 'end' | 'bottom'
  size?: 'small' | 'medium' | 'large'
  color?: 'blue' | 'green' | 'red'
  icon?: React.ReactNode
}
