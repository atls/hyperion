import type { ConditionProps } from '@atls-ui-parts/condition'
import type { Meta }           from '@storybook/react'
import type { StoryObj }       from '@storybook/react'

import { Condition }           from '@atls-ui-parts/condition'

interface StoryConditionProps extends Pick<ConditionProps, 'animated'> {
  isSuccess: boolean
  fallback: string
}

const meta: Meta<StoryConditionProps> = {
  title: 'Components/Condition',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isSuccess: {
      description: 'Переключатель',
      control: { type: 'boolean' },
    },
    animated: {
      description: 'С анимациями',
      control: { type: 'boolean' },
    },
    fallback: {
      description: 'Фаллбэк',
      control: { type: 'text' },
    },
  },
  args: {
    isSuccess: false,
    animated: false,
    fallback: 'Error',
  },
}

export default meta

export const Base: StoryObj<StoryConditionProps> = {
  render: ({ isSuccess, animated, fallback }) => (
    <Condition match={isSuccess} animated={!!animated && 'smooth'} fallback={fallback}>
      Success
    </Condition>
  ),
}
