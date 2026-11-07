import type { Meta }                   from '@storybook/react'
import type { StoryObj }               from '@storybook/react'

import type { TooltipProps }           from './interfaces.js'

import { Tooltip }                     from './component.js'
import { DEFAULT_PRESS_OPEN_DURATION } from './constants.js'
import { tooltipAppearances }          from './styles/appearance/variants.js'
import { tooltipShapes }               from './styles/shape/variants.js'

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  render: (props) => (
    <Tooltip {...props}>
      <button type='button'>Trigger</button>
    </Tooltip>
  ),
  argTypes: {
    children: { control: false },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'right',
      ],
    },
    appearance: { control: 'select', options: Object.keys(tooltipAppearances) },
    shape: { control: 'select', options: Object.keys(tooltipShapes), mapping: tooltipShapes },
    open: { control: 'boolean' },
    trigger: { control: 'select', options: ['hover', 'pressed'] },
    pressOpenDuration: { control: 'number' },
  },
  args: {
    text: 'Tooltip text',
    placement: 'top',
    trigger: 'hover',
    pressOpenDuration: DEFAULT_PRESS_OPEN_DURATION,
    appearance: 'default',
    shape: tooltipShapes.default,
  },
}
export default meta
export const Base: StoryObj<TooltipProps> = {}
