import type { HTMLAttributes }     from 'react'
import type { ReactNode }          from 'react'

import type { FileItemState }      from './states.js'
import type { FileItemAppearance } from './styles/appearance/interfaces.js'
import type { FileItemShape }      from './styles/shape/interfaces.js'
export interface FileItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  name: string
  state?: FileItemState
  progress?: number
  shape?: FileItemShape
  appearance?: FileItemAppearance | 'default'
  onRemove?: () => void
  removeAction?: ReactNode
  removeIcon?: ReactNode
  removeLabel?: string
  progressIndicator?: ReactNode
}
