import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import type { ModalProps } from '../src/modal.interfaces.js'

import React               from 'react'

import { Modal }           from '../src/modal.component.js'

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  render: (props) => (
    <div style={{ width: '100%', height: 600 }}>
      <Modal {...props}>
        <div
          style={{
            position: 'absolute',
            padding: 40,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#ffffff',
          }}
        >
          Content in a modal
        </div>
      </Modal>
    </div>
  ),
  tags: ['autodocs'],
  argTypes: {
    open: {
      name: 'Open',
      description: 'Is the modal opened',
      control: { type: 'boolean' },
    },
  },
}

export default meta

export const Base: StoryObj<ModalProps> = {
  name: 'Базовый',
  args: {
    onClose: () => undefined,
    open: true,
  },
}
