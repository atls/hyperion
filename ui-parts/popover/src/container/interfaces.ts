import type { PropsWithChildren } from 'react'
import type { ReactNode }         from 'react'

export interface ContainerProps extends PropsWithChildren {
  className?: string
  title?: string
  titleClassName?: string
  content?: ReactNode
  contentClassName?: string
}
