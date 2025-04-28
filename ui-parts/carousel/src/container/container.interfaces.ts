import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  ref?: Ref<HTMLDivElement>
}
