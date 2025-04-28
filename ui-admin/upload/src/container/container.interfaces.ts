import type { HTMLAttributes } from 'react'
import type { Ref }            from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isDragActive?: boolean
  isDragReject?: boolean
  isDragAccept?: boolean
  ref?: Ref<HTMLDivElement>
}
