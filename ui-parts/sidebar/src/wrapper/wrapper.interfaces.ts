import type { HTMLAttributes } from 'react'

export interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  pinned?: boolean
}
