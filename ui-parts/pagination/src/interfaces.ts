import type { ComponentPropsWithRef } from 'react'

import type { PaginationAnimation }   from './indicator/animation/interfaces.js'
import type { PaginationAppearance }  from './styles/appearance/interfaces.js'
import type { PaginationShape }       from './styles/shape/interfaces.js'
import type { paginationAppearances } from './styles/appearance/variants.js'

export interface PaginationProps extends Omit<
  ComponentPropsWithRef<'nav'>,
  'children' | 'defaultValue' | 'onChange'
> {
  count: number
  value?: number
  defaultValue?: number
  onChange?: (page: number) => void
  disabled?: boolean
  shape?: PaginationShape
  appearance?: PaginationAppearance | keyof typeof paginationAppearances
  animation?: PaginationAnimation | false
  getItemLabel?: (page: number) => string
  getItemProps?: (
    page: number
  ) => Omit<ComponentPropsWithRef<'button'>, 'aria-current' | 'children' | 'type'>
  classNames?: {
    container?: string
    item?: string
    indicator?: string
  }
}

export type PaginationStateProps = Pick<
  PaginationProps,
  'count' | 'defaultValue' | 'onChange' | 'value'
>

export interface PaginationTransition {
  from: number
  to: number
}
