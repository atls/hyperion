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

export type CheckboxAppearanceName = 'blue' | 'green' | 'red'

export interface CheckboxAppearance {
  box: string
  check: string
  label: string
}

export type CheckboxShapeName = 'large' | 'medium' | 'small'

export interface CheckboxShape {
  box: string
  check: string
  label: string
}

export interface CheckboxProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean
  appearance?: CheckboxAppearance
  checkedIcon?: ReactNode
  classNames?: CheckboxClassNames
  defaultActive?: boolean
  onCheck?: (checked: boolean) => void
  labelPosition?: 'bottom' | 'end' | 'start' | 'top'
  shape?: CheckboxShape
  icon?: ReactNode
  ref?: Ref<HTMLDivElement>
}
