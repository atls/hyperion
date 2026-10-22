import type { InputHTMLAttributes } from 'react'
import type { Ref }                 from 'react'
import type { ReactNode }           from 'react'

import type { BoxShape }            from './box/index.js'

export interface CheckboxClassNames {
  box?: string
  check?: string
  container?: string
  hiddenInput?: string
  label?: string
}

export type CheckboxVisualState = 'default' | 'disabled' | 'focused' | 'hover'
export type CheckboxSelectionState = 'checked' | 'indeterminate' | 'unchecked'

export interface CheckboxAppearanceState {
  backgroundColor: string
  borderColor: string
  markColor: string
  shadow: string
}

export type CheckboxAppearanceStates = Record<CheckboxVisualState, CheckboxAppearanceState>

export interface CheckboxAppearance {
  checked: CheckboxAppearanceStates
  indeterminate?: CheckboxAppearanceStates
  unchecked: CheckboxAppearanceStates
}

export type CheckboxShapeName = 'lg' | 'md' | 'sm'

export interface CheckboxShape {
  box: BoxShape
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
