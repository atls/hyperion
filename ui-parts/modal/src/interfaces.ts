import type { FloatingFocusManagerProps } from '@floating-ui/react'
import type { JSX }                       from 'react'
import type { HTMLAttributes }            from 'react'

export interface ModalProps {
  children: JSX.Element
  open?: boolean
  onClose?: () => void
  backdropProps?: HTMLAttributes<HTMLDivElement>
  focusProps?: Omit<FloatingFocusManagerProps, 'children' | 'context'>
}
