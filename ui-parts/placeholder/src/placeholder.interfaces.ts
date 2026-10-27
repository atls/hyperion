import type { HTMLAttributes }         from 'react'
import type { ReactNode }              from 'react'
import type { Ref }                    from 'react'

import type { PlaceholderAppearance }  from './styles/appearance/interfaces.js'
import type { PlaceholderShape }       from './styles/shape/interfaces.js'
import type { placeholderAppearances } from './styles/appearance/variants.js'

export type PlaceholderTextPosition = 'bottom' | 'left' | 'right' | 'top'

export interface PlaceholderClassNames {
  container?: string
  description?: string
  icon?: string
  title?: string
}

export interface PlaceholderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  appearance?: PlaceholderAppearance | keyof typeof placeholderAppearances
  classNames?: PlaceholderClassNames
  description?: ReactNode
  icon: ReactNode
  ref?: Ref<HTMLDivElement>
  shape?: PlaceholderShape
  textPosition?: PlaceholderTextPosition
  title?: ReactNode
}
