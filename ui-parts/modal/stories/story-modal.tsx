import type { ModalProps }   from '@atls-ui-parts/modal'
import type { ReactElement } from 'react'

import { useArgs }           from '@storybook/preview-api'

import { Modal }             from '@atls-ui-parts/modal'

import { backdropStyles }    from './styles.css.js'
import { containerStyles }   from './styles.css.js'

export const StoryModal = (): ReactElement => {
  const [{ open }, updateArgs] = useArgs<ModalProps>()

  const handleOpen = (): void => {
    updateArgs({ open: true })
  }

  const handleClose = (): void => {
    updateArgs({ open: false })
  }

  return (
    <>
      <button type='button' onClick={handleOpen}>
        Trigger
      </button>
      <Modal open={open} backdropProps={{ className: backdropStyles }} onClose={handleClose}>
        <div className={containerStyles}>Content in a modal</div>
      </Modal>
    </>
  )
}
