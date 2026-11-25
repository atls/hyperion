import type { ComponentPropsWithRef } from 'react'

import type { PaginationAnimation }   from '../indicator/animation/interfaces.js'
import type { IndicatorAppearance }   from '../indicator/appearance/interfaces.js'
import type { PaginationTransition }  from '../interfaces.js'
import type { ItemAppearances }       from './styles/appearance/interfaces.js'
import type { ItemShape }             from './styles/shape/interfaces.js'

export interface ItemProps extends Omit<ComponentPropsWithRef<'button'>, 'children'> {
  selected: boolean
  page: number
  shape: ItemShape
  appearance: ItemAppearances
  animation: PaginationAnimation | false
  transition: PaginationTransition
  indicatorClassName?: string
  indicatorAppearance?: IndicatorAppearance
}
