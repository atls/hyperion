import React     from 'react'

import { Modal } from '.'

export default {
  title: 'Components/Modal',
}

export const Base = () => (
  <div style={{ width: '100%', height: 600 }}>
    <Modal open>
      <div
        style={{
          position: 'absolute',
          padding: 40,
          background: '#ffffff',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Content in a modal
      </div>
    </Modal>
  </div>
)
