import type { ReactNode }  from 'react'

import type { ModalProps } from './modal.interfaces.js'

import { AnimatePresence } from 'framer-motion'
import React               from 'react'

import { Condition }       from '@atls-ui-parts/condition'
import { Portal }          from '@atls-ui-parts/portal'

import { Backdrop }        from './backdrop/index.js'
import { Container }       from './container/index.js'

export const Modal = ({ children, open, onClose }: ModalProps): ReactNode => (
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
