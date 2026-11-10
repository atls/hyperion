import type { ReactNode }       from 'react'

import type { CloseAppearance } from './styles/appearance/interfaces.js'
import type { CloseShape }      from './styles/shape/interfaces.js'

export interface CloseProps {
  appearance: CloseAppearance
  label: string
  icon?: ReactNode
  onClose?: () => void
  shape: CloseShape
}
