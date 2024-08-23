import { LiHTMLAttributes } from 'react'

export interface ItemProps extends LiHTMLAttributes<HTMLLIElement> {
  highlighted: boolean
}
