import type { FloatingFocusManagerProps } from '@floating-ui/react'
import type { HTMLAttributes }            from 'react'
import type { ReactNode }                 from 'react'

import type { ModalAppearance }           from './styles/appearance/interfaces.js'
import type { ModalShape }                from './styles/shape/interfaces.js'
import type { modalAppearances }          from './styles/appearance/variants.js'

export type ModalState = 'default' | 'destructive' | 'loading'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode
  state?: ModalState
  showClose?: boolean
  closeIcon?: ReactNode
  loadingIndicator?: ReactNode
  confirmAction?: ReactNode
  cancelAction?: ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  open?: boolean
  onClose?: () => void
  closeLabel?: string
  appearance?: ModalAppearance | keyof typeof modalAppearances
  shape?: ModalShape
  backdropProps?: HTMLAttributes<HTMLDivElement>
  focusProps?: Omit<FloatingFocusManagerProps, 'children' | 'context'>
}
