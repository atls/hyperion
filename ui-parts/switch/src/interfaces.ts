import type { ButtonHTMLAttributes } from 'react'
import type { ReactNode }            from 'react'
import type { Ref }                  from 'react'

import type { SwitchAppearance }     from './styles/appearance/interfaces.js'

export type SwitchShape = string

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onChange'> {
  appearance?: SwitchAppearance
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  ref?: Ref<HTMLButtonElement>
  shape?: SwitchShape
  thumb?: ReactNode
}
