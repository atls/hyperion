import React, { FunctionComponent } from 'react'
import { AnimatePresence }          from 'framer-motion'

import { Portal }                   from '@atls-ui-parts/portal'

import { Backdrop }                 from './backdrop'
import { Container }                from './container'
import { ModalProps }               from './modal.interfaces'

const Modal: FunctionComponent<ModalProps> = ({ children, open, onClose }) => {
  let content = null

  if (open) {
    content = (
      <Portal>
        <Container>
          <Backdrop onClick={onClose} />
          {children}
        </Container>
      </Portal>
    )
  }

  return <AnimatePresence>{content}</AnimatePresence>
}

export { Modal }
