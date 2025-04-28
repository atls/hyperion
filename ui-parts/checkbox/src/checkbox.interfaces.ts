import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'
import type { ReactNode }      from 'react'

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  onCheck: (checked: boolean) => void
  active: boolean
  labelPosition?: 'bottom' | 'end' | 'start' | 'top'
  size?: 'large' | 'medium' | 'small'
  color?: 'blue' | 'green' | 'red'
  icon?: ReactNode
  ref?: Ref<HTMLDivElement>
}
