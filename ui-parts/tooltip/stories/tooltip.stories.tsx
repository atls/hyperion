import type { Meta }                      from '@storybook/react'
import type { StoryObj }                  from '@storybook/react'
import type { ReactElement }              from 'react'

import type { StoryTooltipProps }         from './interfaces.js'

import { Tooltip }                        from '@atls-ui-parts/tooltip'

import { storyContainerAppearanceStyles } from './styles.css.js'
import { storyContainerShapeStyles }      from './styles.css.js'
import { storyTriggerStyles }             from './styles.css.js'

const storyContainerClassName = [storyContainerAppearanceStyles, storyContainerShapeStyles].join(
  ' '
)

const renderTooltip = ({
  animated,
  arrow,
  customContainer,
  offset,
  placement,
  styledContainer,
  trigger,
}: StoryTooltipProps): ReactElement => (
  <Tooltip
    animated={animated}
    arrow={arrow && (customContainer || styledContainer) ? { fill: 'green' } : arrow}
    appearance={styledContainer ? { container: storyContainerAppearanceStyles } : undefined}
    offset={offset}
    placement={placement}
    shape={styledContainer ? { container: storyContainerShapeStyles } : undefined}
    trigger={trigger}
    text='Tooltip text'
    container={customContainer ? <div className={storyContainerClassName} /> : undefined}
  >
    <div className={storyTriggerStyles}>Trigger</div>
  </Tooltip>
)

const meta: Meta<StoryTooltipProps> = {
  title: 'Components/Tooltip',
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

export const Base: StoryObj<StoryTooltipProps> = {
  render: renderTooltip,
}

export const StyledContainer: StoryObj<StoryTooltipProps> = {
  args: {
    styledContainer: true,
  },
  render: renderTooltip,
}
