import type { ModalProps } from '@atls-ui-parts/modal'
import type { Meta }       from '@storybook/react'
import type { StoryObj }   from '@storybook/react'

import { StoryModal }      from './story-modal.js'

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      name: 'Open',
      description: 'Is the modal opened',
      control: { type: 'boolean' },
    },
  },
  args: {
    open: false,
  },
}

export default meta

export const Base: StoryObj<ModalProps> = {
  name: 'Базовый',
  render: StoryModal,
}
