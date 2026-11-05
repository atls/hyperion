import type { ButtonHTMLAttributes } from 'react'
import type { HTMLAttributes }       from 'react'
import type { ReactNode }            from 'react'
import type { Ref }                  from 'react'

import type { CardAppearance }       from './styles/appearance/interfaces.js'
import type { CardShape }            from './styles/shape/interfaces.js'
import type { cardAppearances }      from './styles/appearance/variants.js'

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  appearance?: CardAppearance | keyof typeof cardAppearances
  children?: ReactNode
  clickable?: boolean
  disabled?: ButtonHTMLAttributes<HTMLButtonElement>['disabled']
  ref?: Ref<HTMLButtonElement | HTMLDivElement>
  shape?: CardShape
}
