import type { Meta }                    from '@storybook/react'
import type { StoryObj }                from '@storybook/react'

import type { LinearProgressAnimation } from '../../index.js'
import type { LinearProgressProps }     from '../../index.js'

import { animations }                   from '@atls-ui/theme/tokens'

import { LinearProgress }               from '../../index.js'
import { linearProgressAnimations }     from '../../index.js'
import { linearProgressAppearances }    from '../../index.js'
import { linearProgressShapes }         from '../../index.js'
import { forward }                      from './styles.css.js'
import { backward }                     from './styles.css.js'

const storyAnimations = {
  ...linearProgressAnimations,
  custom: {
    duration: `${animations.loopDuration.sm}ms`,
    easing: animations.easing.easeInOut,
    segments: [forward, backward],
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
