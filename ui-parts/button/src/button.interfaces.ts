import type { ButtonHTMLAttributes } from 'react'
import type { ReactNode }            from 'react'
import type { Ref }                  from 'react'

import type { ButtonAppearance }     from './styles/interfaces.js'
import type { ButtonShape }          from './styles/interfaces.js'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: ButtonAppearance
  fullWidth?: boolean
  leadingAddon?: ReactNode
  ref?: Ref<HTMLButtonElement>
  shape?: ButtonShape
  trailingAddon?: ReactNode
}
