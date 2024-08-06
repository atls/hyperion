import { HTMLAttributes } from 'react'

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  selected?: boolean
}
