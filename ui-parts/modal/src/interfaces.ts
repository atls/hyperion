import type { RefObject }            from 'react'
import type { DialogHTMLAttributes } from 'react'
import type { ReactNode }            from 'react'

import type { ModalAppearance }      from './styles/appearance/interfaces.js'
import type { ModalShape }           from './styles/shape/interfaces.js'
import type { modalAppearances }     from './styles/appearance/variants.js'

export type ModalState = 'default' | 'destructive' | 'loading'

export interface ModalProps extends Omit<
  DialogHTMLAttributes<HTMLDialogElement>,
  'children' | 'onCancel' | 'onClose'
> {
  children?: ReactNode
  state?: ModalState
  showClose?: boolean
  closeIcon?: ReactNode
  loadingIndicator?: ReactNode
  confirmAction?: ReactNode
  cancelAction?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  initialFocus?: RefObject<HTMLElement | null>
  open?: boolean
  onClose?: () => void
  closeLabel?: string
  appearance?: ModalAppearance | keyof typeof modalAppearances
  shape?: ModalShape
  backdropProps?: Pick<
    DialogHTMLAttributes<HTMLDialogElement>,
    'className' | 'onPointerDown' | 'style'
  >
}
