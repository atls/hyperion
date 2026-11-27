import type { HTMLAttributes }         from 'react'
import type { ReactNode }              from 'react'

import type { FileItemContainerShape } from './styles/shape/interfaces.js'
export interface FileItemContainerProps extends HTMLAttributes<HTMLDivElement> {
  shape: FileItemContainerShape
  action?: ReactNode
  progress?: ReactNode
}
