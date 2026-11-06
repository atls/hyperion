import type { Meta }                from '@storybook/react'
import type { StoryObj }            from '@storybook/react'

import type { CircleProgressProps } from './circle-progress/interfaces.js'

import { useTheme }                 from '@atls-ui-parts/theme'

import { CircleProgress }           from './circle-progress/component.js'
import { circleProgressShapes }     from './circle-progress/styles/shape/variants.js'

const storyShapes = {
  ...circleProgressShapes,
  circle: {
    ...circleProgressShapes.md,
    container: { width: 64, height: 64 },
    box: { ...circleProgressShapes.md.box, radius: 32 },
  },
}

type StoryArgs = CircleProgressProps & { indeterminate: boolean }

const CustomCircle = ({ indeterminate, ...args }: StoryArgs) => {
  const theme = useTheme()

  return (
    <CircleProgress
      {...args}
      value={indeterminate ? undefined : args.value}
      shape={storyShapes.circle}
      animation={{ variant: 'spinner', duration: '2s', easing: 'ease-in-out' }}
      appearance={{
        box: { backgroundColor: theme.colors.main.transparent, shadow: 'none' },
        track: { color: theme.colors.surface.muted },
        indicator: { color: theme.colors.action.base, endColor: theme.colors.action.base },
        label: { color: theme.colors.text.primary },
      }}
    >
      {false}
    </CircleProgress>
  )
}

const meta: Meta<StoryArgs> = {
  title: 'Components/Progress/Circle',
  component: CircleProgress,
  render: ({ indeterminate, ...args }) => (
    <CircleProgress {...args} value={indeterminate ? undefined : args.value} />
  ),
  args: {
    value: 40,
    indeterminate: false,
    shape: circleProgressShapes.md,
    appearance: 'primary',
    'aria-label': 'Progress',
  },
  argTypes: {
    indeterminate: { control: 'boolean' },
    animation: { control: 'select', options: ['orbit', 'spinner'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
    shape: {
      control: 'select',
      options: Object.keys(storyShapes),
      mapping: storyShapes,
    },
    appearance: { control: 'select', options: ['primary', 'secondary'] },
  },
}

export default meta
export const Base: StoryObj<typeof meta> = {}
export const Custom: StoryObj<typeof meta> = {
  name: 'Кастомный круг',
  render: (args) => <CustomCircle {...args} />,
}
