import React                 from 'react'
import { AnimatePresence }   from 'framer-motion'
import { FunctionComponent } from 'react'
import { PropsWithChildren } from 'react'
import { ReactElement }      from 'react'

import { Portal }            from '@atls-ui-parts/portal'

import { Backdrop }          from './backdrop'
import { Container }         from './container'
import { ModalProps }        from './modal.interfaces'

const Modal: FunctionComponent<PropsWithChildren<ModalProps>> = ({ children, open, onClose }) => {
  let content: ReactElement | null = null

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
