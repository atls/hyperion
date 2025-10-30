import type { ReactNode }       from 'react'

import type { ModalProps }      from './interfaces.js'

import { FloatingOverlay }      from '@floating-ui/react'
import { FloatingPortal }       from '@floating-ui/react'
import { FloatingFocusManager } from '@floating-ui/react'
import { cloneElement }         from 'react'

import { useFloat }             from '@atls-utils/use-float'

export const Modal = ({
  open = false,
  onClose,
  children,
  backdropProps,
  focusProps,
}: ModalProps): ReactNode => {
  const handleOpenChange = (isOpen: boolean): void => {
    if (!isOpen && onClose) {
      onClose()
    }
  }

  const { refs, isOpen, context, getFloatingProps } = useFloat({
    open,
    onOpenChange: handleOpenChange,
    role: 'dialog',
    dismiss: { outsidePressEvent: 'mousedown' },
  })

  if (!isOpen) {
    return null
  }

  const ContainerElement = cloneElement(children, { ref: refs.setFloating, ...getFloatingProps() })

  return (
    <FloatingPortal>
      <FloatingOverlay lockScroll {...backdropProps}>
        <FloatingFocusManager context={context} {...focusProps}>
          {ContainerElement}
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  )
}
