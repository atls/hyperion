import type { ReactNode }    from 'react'

import type { ActionsShape } from './styles/shape/interfaces.js'

export interface ActionsProps {
  shape: ActionsShape
  confirmAction?: ReactNode
  cancelAction?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
}
