import type { ButtonHTMLAttributes } from 'react'
import type { ReactNode }            from 'react'
import type { Ref }                  from 'react'

import type { BoxAppearance }        from './styles/appearance/interfaces.js'
import type { BoxShape }             from './styles/shape/interfaces.js'
export interface BoxProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  shape: BoxShape
  appearance: BoxAppearance
  clickable?: boolean
  children?: ReactNode
  ref?: Ref<HTMLButtonElement | HTMLSpanElement>
}
