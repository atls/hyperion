import type { PropsWithChildren } from 'react'
import type { ReactNode }         from 'react'

export interface ContainerProps extends PropsWithChildren {
  title?: string
  content?: ReactNode
}
