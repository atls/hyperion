import type { Meta }                    from '@storybook/react'
import type { StoryObj }                from '@storybook/react'

import type { CircleProgressAnimation } from './indicator/animation/interfaces.js'
import type { CircleProgressProps }     from './interfaces.js'

import { useTheme }                     from '@atls-ui-parts/theme'
import { spacing }                      from '@atls-ui/theme/tokens'

import { CircleProgress }               from './component.js'
import { circleProgressAnimations }     from './indicator/animation/variants.js'
import { circleProgressShapes }         from './styles/shape/variants.js'

const storyShapes = {
  ...circleProgressShapes,
  circle: {
    ...circleProgressShapes.md,
    container: { width: 64, height: 64 },
    box: {
      ...circleProgressShapes.md.box,
      paddingInline: spacing.component.none,
      paddingBlock: spacing.component.none,
    },
  },
}

const storyAnimations = {
  ...circleProgressAnimations,
  custom: {
    duration: '3s',
    easing: 'linear',
    segments: [
      {
        frames: [
          { at: 0, start: 0, end: 0.1 },
          { at: 1, start: 1, end: 1.1 },
        ],
      },
      {
        frames: [
          { at: 0, start: 0.4, end: 0.5 },
          { at: 1, start: 1.4, end: 1.5 },
        ],
      },
      {
        frames: [
          { at: 0, start: 0.8, end: 0.9 },
          { at: 1, start: 1.8, end: 1.9 },
        ],
      },
    ],
  },
} satisfies Record<string, CircleProgressAnimation>

type StoryArgs = CircleProgressProps & { indeterminate: boolean; indicatorBackground?: string }

const CustomCircle = ({ indeterminate, indicatorBackground, ...args }: StoryArgs) => {
  const theme = useTheme()

  return (
    <CircleProgress
      {...args}
      value={indeterminate ? undefined : args.value}
      shape={storyShapes.circle}
      animation={
        args.animation ?? {
          ...circleProgressAnimations.spinner,
          duration: '2s',
          easing: 'ease-in-out',
        }
      }
      appearance={{
        box: { backgroundColor: theme.colors.main.transparent, shadow: 'none' },
        track: { color: theme.colors.surface.muted },
        indicator: { background: indicatorBackground || theme.colors.action.base },
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
  render: ({ indeterminate, indicatorBackground: _indicatorBackground, ...args }) => (
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
    animation: {
      control: 'select',
      options: Object.keys(storyAnimations),
      mapping: storyAnimations,
    },
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
  name: 'Custom',
  render: (args) => <CustomCircle {...args} />,
  argTypes: {
    indicatorBackground: {
      control: 'text',
      description: 'CSS color or gradient for the indicator',
    },
  },
}
