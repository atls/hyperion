import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'
import type { ReactNode }      from 'react'

import type { CheckboxAppearance } from './styles/index.js'
import type { CheckboxShape }      from './styles/index.js'

export interface CheckboxClassNames {
  box?: string
  check?: string
  container?: string
  hiddenInput?: string
  label?: string
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
