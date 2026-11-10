import type { Meta }        from '@storybook/react'
import type { StoryObj }    from '@storybook/react'

import type { ModalProps }  from './interfaces.js'

import { useArgs }          from 'storybook/preview-api'

import { Modal }            from './component.js'
import { modalAppearances } from './styles/appearance/variants.js'
import { modalShapes }      from './styles/shape/variants.js'

const RenderModal = (args: ModalProps) => {
  const [, updateArgs] = useArgs()
  return (
    <>
      <button
        type='button'
        onClick={() => {
          updateArgs({ open: true })
        }}
      >
        Open modal
      </button>
      <Modal
        {...args}
        onClose={() => {
          updateArgs({ open: false })
        }}
      />
    </>
  )
}

const meta: Meta<ModalProps> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['default', 'loading', 'destructive'] },
    appearance: { control: 'select', options: Object.keys(modalAppearances) },
    shape: { control: 'select', options: Object.keys(modalShapes), mapping: modalShapes },
    open: { control: 'boolean' },
  },
  args: {
    open: false,
    state: 'default',
    shape: modalShapes.md,
    appearance: 'default',
    children: 'Modal content',
    'aria-label': 'Modal',
  },
  render: RenderModal,
}
export default meta
export const Base: StoryObj<ModalProps> = { name: 'Базовый' }
