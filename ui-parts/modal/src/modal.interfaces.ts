import { PropsWithChildren } from 'react'

export interface ModalProps extends PropsWithChildren {
  onClose?: () => void
  open?: boolean
}
