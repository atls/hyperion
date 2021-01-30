import React     from 'react'
import ReactDOM  from 'react-dom'

import { Modal } from '../src/index'

it('Modal should render correctly', () => {
  ReactDOM.createPortal = node => node

  expect(
    ReactDOM.createPortal(
      <Modal visible opacity='large' onClick={Function} onClose={Function}>
        Something
      </Modal>
    )
  ).toMatchSnapshot()
})
