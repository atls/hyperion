import { HTMLAttributes } from 'react'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  isDragActive?: boolean
  isDragReject?: boolean
  isDragAccept?: boolean
}
