import type { InputHTMLAttributes } from 'react'
import type { Ref }                 from 'react'
import type { ReactNode }           from 'react'

import type { BoxShape }            from './box/index.js'
import type { CheckboxAppearance }  from './styles/appearance/interfaces.js'
import type { checkboxAppearances } from './styles/appearance/variants.js'

export interface CheckboxClassNames {
  box?: string
  check?: string
  container?: string
  hiddenInput?: string
  label?: string
}

export type CheckboxShapeName = 'lg' | 'md' | 'sm'

export interface CheckboxShape {
  box: BoxShape
  check: string
  gap: string
  label: string
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  indeterminate?: boolean
  appearance?: CheckboxAppearance | keyof typeof checkboxAppearances
  shape?: CheckboxShape
  checkedIcon?: ReactNode
  indeterminateIcon?: ReactNode
  classNames?: CheckboxClassNames
  labelPosition?: 'bottom' | 'end' | 'start' | 'top'
  ref?: Ref<HTMLInputElement>
}
