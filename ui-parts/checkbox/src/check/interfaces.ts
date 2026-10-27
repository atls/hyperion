import type { ReactNode }                from 'react'

import type { CheckboxAppearanceStates } from '../styles/appearance/interfaces.js'

export interface CheckProps {
  appearance: CheckboxAppearanceStates['check']
  checked: boolean
  checkedIcon?: ReactNode
  className?: string
  indeterminate?: boolean
  indeterminateIcon?: ReactNode
  shape: string
}
