import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'
import type { ReactNode }      from 'react'

export interface CheckboxClassNames {
  box?: string
  check?: string
  container?: string
  hiddenInput?: string
  label?: string
}

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean
  checkedIcon?: ReactNode
  classNames?: CheckboxClassNames
  defaultActive?: boolean
  onCheck?: (checked: boolean) => void
  labelPosition?: 'bottom' | 'end' | 'start' | 'top'
  size?: 'large' | 'medium' | 'small'
  color?: 'blue' | 'green' | 'red'
  icon?: ReactNode
  ref?: Ref<HTMLDivElement>
}
