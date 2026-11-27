import type { HTMLAttributes } from 'react'
import type { ReactNode }      from 'react'

import type { ContainerShape } from './styles/shape/interfaces.js'
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  shape: ContainerShape
  files?: ReactNode
}
