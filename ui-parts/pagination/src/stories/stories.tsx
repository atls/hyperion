import type { Meta }                from '@storybook/react'
import type { StoryObj }            from '@storybook/react'

import type { PaginationAnimation } from '../index.js'
import type { PaginationKeyframes } from '../index.js'
import type { PaginationProps }     from '../index.js'

import { useArgs }                  from 'storybook/preview-api'

import { animations }               from '@atls-ui/theme/tokens'

import { Pagination }               from '../index.js'
import { paginationAnimations }     from '../index.js'
import { paginationShapes }         from '../index.js'
import { fadeEnter }                from './styles.css.js'
import { fadeLeave }                from './styles.css.js'
import { previewStyles }            from './styles.css.js'

const storyAnimations = {
  ...paginationAnimations,
  custom: {
    enter: {
      pulse: {
        animationName: fadeEnter,
        animationDuration: animations.duration.lg,
        animationTimingFunction: animations.easing.easeOut,
      },
    },
    leave: { fade: { animationName: fadeLeave, animationDuration: animations.duration.md } },
  } satisfies PaginationAnimation,
  none: false,
}

type StoryArgs = PaginationProps & {
  controlled: boolean
  paused: boolean
  phase: number
  duration: PaginationKeyframes['animationDuration']
  easing: PaginationKeyframes['animationTimingFunction']
}

const meta: Meta<StoryArgs> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    count: 4,
    value: 3,
    disabled: false,
    controlled: true,
    paused: false,
    phase: 50,
    duration: `${animations.loopDuration.sm}ms`,
    easing: animations.easing.linear,
    shape: paginationShapes.default,
    appearance: 'default',
    animation: paginationAnimations.flow,
    'aria-label': 'Pagination',
  },
  argTypes: {
    count: { control: { type: 'number', min: 0, step: 1 } },
    value: { control: { type: 'number', min: 1, step: 1 } },
    disabled: { control: 'boolean' },
    controlled: { control: 'boolean' },
    paused: { control: 'boolean' },
    phase: { control: { type: 'number', min: 0, max: 100, step: 0.01 } },
    duration: { control: 'text' },
    easing: { control: 'text' },
    shape: { control: 'object' },
    appearance: { control: 'select', options: ['default'] },
    animation: {
      control: 'select',
      options: Object.keys(storyAnimations),
      mapping: storyAnimations,
    },
    getItemLabel: { control: false },
    getItemProps: { control: false },
  },
  render: function Render({
    controlled,
    paused,
    phase,
    duration,
    easing,
    animation,
    value,
    ...args
  }) {
    const [, updateArgs] = useArgs()
    const configureLayer = (layer: PaginationKeyframes): PaginationKeyframes => ({
      ...layer,
      animationDuration: duration,
      animationTimingFunction: easing,
      animationPlayState: paused ? 'paused' : layer.animationPlayState,
      animationDelay: paused ? `calc(${duration} * ${phase} / -100)` : layer.animationDelay,
    })
    const configure = (layers: Readonly<Record<string, PaginationKeyframes>>) =>
      Object.fromEntries(Object.entries(layers).map(([id, layer]) => [id, configureLayer(layer)]))
    return (
      <div className={previewStyles}>
        <Pagination
          {...args}
          value={controlled ? value : undefined}
          defaultValue={value}
          animation={
            animation && {
              enter: configure(animation.enter),
              leave: configure(animation.leave),
              surface: animation.surface && {
                enter: animation.surface.enter && configureLayer(animation.surface.enter),
                leave: animation.surface.leave && configureLayer(animation.surface.leave),
              },
            }
          }
          onChange={(nextValue) => {
            updateArgs({ value: nextValue })
          }}
        />
      </div>
    )
  },
}

export default meta
export const Base: StoryObj<typeof meta> = { name: 'Базовый' }
