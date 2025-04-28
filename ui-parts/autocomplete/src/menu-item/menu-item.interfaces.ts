import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  selected?: boolean
  ref?: Ref<HTMLDivElement>
}
