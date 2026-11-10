import type { Meta }                    from '@storybook/react'
import type { StoryObj }                from '@storybook/react'

import type { LinearProgressAnimation } from './indicator/animation/interfaces.js'
import type { LinearProgressProps }     from './interfaces.js'

import { LinearProgress }               from './component.js'
import { linearProgressAnimations }     from './indicator/animation/variants.js'
import { linearProgressAppearances }    from './styles/appearance/variants.js'
import { linearProgressShapes }         from './styles/shape/variants.js'

const storyAnimations = {
  ...linearProgressAnimations,
  custom: {
    duration: '2s',
    easing: 'ease-in-out',
    segments: [
      {
        id: 'forward',
        frames: [
          { at: 0, start: -0.3, end: 0 },
          { at: 1, start: 1, end: 1.3 },
        ],
      },
      {
        id: 'backward',
        frames: [
          { at: 0, start: 1, end: 1.2 },
          { at: 1, start: -0.2, end: 0 },
        ],
      },
    ],
  },
} satisfies Record<string, LinearProgressAnimation>

type StoryArgs = LinearProgressProps & { indeterminate: boolean }

const meta: Meta<StoryArgs> = {
  title: 'Components/Progress/Linear',
  component: LinearProgress,
  render: ({ indeterminate, ...args }) => (
    <LinearProgress {...args} value={indeterminate ? undefined : args.value} />
  ),
  args: {
    value: 40,
    indeterminate: false,
    shape: linearProgressShapes.sm,
    appearance: 'primary',
    animation: linearProgressAnimations.indeterminate,
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
      options: Object.keys(linearProgressShapes),
      mapping: linearProgressShapes,
    },
    appearance: { control: 'select', options: Object.keys(linearProgressAppearances) },
  },
}

export default meta
export const Base: StoryObj<typeof meta> = { name: 'Base' }
