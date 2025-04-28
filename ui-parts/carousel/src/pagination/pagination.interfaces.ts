import type { HTMLAttributes }      from 'react'
import type { Ref }                 from 'react'

import type { PaginationSprinkles } from './pagination.css.js'

export interface ActiveStyles {
  color?: PaginationSprinkles['color']
  backgroundColor?: PaginationSprinkles['backgroundColor']
  borderColor?: PaginationSprinkles['borderColor']
  size?: PaginationSprinkles['size']
  margin?: PaginationSprinkles['margin']
  borderWidth?: PaginationSprinkles['borderWidth']
  borderRadius?: PaginationSprinkles['borderRadius']
}

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    PaginationSprinkles {
  active?: boolean
  activeStyleOptions?: ActiveStyles
  ref?: Ref<HTMLDivElement>
}
