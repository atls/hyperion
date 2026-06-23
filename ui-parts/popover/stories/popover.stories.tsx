import type { Meta }              from '@storybook/react'
import type { StoryObj }          from '@storybook/react'

import type { StoryPopoverProps } from './interfaces.js'

import { expect }                 from 'storybook/test'
import { userEvent }              from 'storybook/test'
import { waitFor }                from 'storybook/test'
import { within }                 from 'storybook/test'

import { StoryPopover }           from './story-popover.js'

const meta: Meta<StoryPopoverProps> = {
  title: 'Components/Popover',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    animated: {
      description: 'Анимированный',
      control: { type: 'boolean' },
    },
    arrow: {
      description: 'Указатель',
      control: { type: 'boolean' },
    },
    customContainer: {
      description: 'Свой контейнер',
      control: { type: 'boolean' },
    },
    styledContainer: {
      description: 'Стили дефолтного контейнера',
      control: { type: 'boolean' },
    },
    offset: {
      description: 'Офсет',
      control: { type: 'number' },
    },
    placement: {
      description: 'Расположение',
      control: { type: 'select' },
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-end',
        'top-start',
        'right-end',
        'right-start',
        'bottom-end',
        'bottom-start',
        'left-end',
        'left-start',
      ],
    },
    trigger: {
      description: 'Триггер',
      control: { type: 'select' },
      options: ['click', 'hover'],
    },
  },
  args: {
    animated: true,
    arrow: true,
    customContainer: false,
    styledContainer: false,
    offset: 10,
    placement: 'top',
    trigger: 'click',
  },
}

export default meta

export const Base: StoryObj<StoryPopoverProps> = {
  render: StoryPopover,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const documentBody = within(document.body)

    await userEvent.click(canvas.getByText('Trigger'))

    const content = await documentBody.findByText('Popover content')

    await waitFor(async () => {
      await expect(content).toBeVisible()
    })
  },
}

export const StyledContainer: StoryObj<StoryPopoverProps> = {
  args: {
    styledContainer: true,
  },
  render: StoryPopover,
}
