import type { InputHTMLAttributes } from 'react'
import type { Ref }                 from 'react'
import type { ReactNode }           from 'react'

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

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
  appearance?: CheckboxAppearance
  shape?: CheckboxShape
  checkedIcon?: ReactNode
  indeterminateIcon?: ReactNode
  classNames?: CheckboxClassNames
  labelPosition?: 'bottom' | 'end' | 'start' | 'top'
  ref?: Ref<HTMLInputElement>
}
