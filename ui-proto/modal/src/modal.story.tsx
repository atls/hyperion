import React     from 'react'

import { Modal } from '.'

export default {
  title: 'Компоненты/Модальное окно/Примеры',
}

export const Base = () => (
  <div style={{ width: '100%', height: 600 }}>
    <Modal open>
      <div
        style={{
          position: 'absolute',
          background: '#ffffff',
          padding: 40,
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
