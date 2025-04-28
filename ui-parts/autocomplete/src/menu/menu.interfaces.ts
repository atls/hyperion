import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
}
