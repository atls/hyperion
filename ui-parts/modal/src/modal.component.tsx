import { AnimatePresence } from 'framer-motion'
import { FC }              from 'react'
import React               from 'react'

import { Condition }       from '@atls-ui-parts/condition'
import { Portal }          from '@atls-ui-parts/portal'

import { Backdrop }        from './backdrop/index.js'
import { Container }       from './container/index.js'
import { ModalProps }      from './modal.interfaces.js'

export const Modal: FC<ModalProps> = ({ children, open, onClose }) => (
  <AnimatePresence>
    <Condition match={Boolean(open)}>
      <Portal>
        <Container>
          <Backdrop onClick={onClose} />
          {children}
        </Container>
      </Portal>
    </Condition>
  </AnimatePresence>
)
