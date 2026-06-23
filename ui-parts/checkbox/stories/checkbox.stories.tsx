import type { Meta }             from '@storybook/react'
import type { StoryObj }         from '@storybook/react'

import type { CheckboxProps }    from '../src/checkbox.interfaces.js'

import { expect }                from 'storybook/test'
import { userEvent }             from 'storybook/test'
import { within }                from 'storybook/test'

import { Column }                from '@atls-ui-parts/layout'
import { Layout }                from '@atls-ui-parts/layout'

import { Checkbox }              from '../src/checkbox.component.js'
import { checkboxAppearances }   from '../src/index.js'
import { checkboxShapes }        from '../src/index.js'
import { customBoxStyles }       from './styles.css.js'
import { customCheckStyles }     from './styles.css.js'
import { customContainerStyles } from './styles.css.js'
import { customLabelStyles }     from './styles.css.js'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  render: (props) => (
    <Column fill alignItems='center'>
      <Layout flexBasis='40px' />
      <Checkbox {...props} />
      <Layout flexBasis='40px' />
    </Column>
  ),
  tags: ['autodocs'],
  argTypes: {
    active: {
      name: 'Active',
      description: 'Is the checkbox checked',
      control: { type: 'boolean' },
    },
    appearance: {
      name: 'Appearance',
      description: 'Color of the divider',
      control: { type: 'select' },
      options: Object.keys(checkboxAppearances),
      mapping: checkboxAppearances,
    },
    shape: {
      name: 'Shape',
      description: 'Size of the divider',
      control: { type: 'select' },
      options: Object.keys(checkboxShapes),
      mapping: checkboxShapes,
    },
    labelPosition: {
      name: 'Label position',
      description: 'Label position',
      control: { type: 'select' },
      options: ['start', 'top', 'end', 'bottom'],
    },
  },
}

export default meta

type Story = StoryObj<CheckboxProps>

export const Base: Story = {
  name: 'Базовый',
  args: {
    onCheck: () => undefined,
    active: false,
    labelPosition: 'start',
    appearance: checkboxAppearances.blue,
    shape: checkboxShapes.medium,
    children: 'Checkbox Label',
  },
}

export const Custom: Story = {
  name: 'Кастомный',
  args: {
    defaultActive: true,
    labelPosition: 'end',
    appearance: checkboxAppearances.blue,
    shape: checkboxShapes.medium,
    checkedIcon: '✓',
    classNames: {
      box: customBoxStyles,
      check: customCheckStyles,
      container: customContainerStyles,
      label: customLabelStyles,
    },
    children: 'Custom checkbox',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const checkbox = canvas.getByRole('checkbox', { name: /Custom checkbox/ })

    await expect(checkbox).toBeChecked()

    await userEvent.click(checkbox)

    await expect(checkbox).not.toBeChecked()
  },
}
