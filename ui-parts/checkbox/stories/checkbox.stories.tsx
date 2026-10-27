import type { Meta }             from '@storybook/react'
import type { StoryObj }         from '@storybook/react'

import type { CheckboxProps }    from '../src/checkbox.interfaces.js'

import { useArgs }               from 'storybook/preview-api'
import { expect }                from 'storybook/test'
import { userEvent }             from 'storybook/test'
import { within }                from 'storybook/test'

import { Column }                from '@atls-ui-parts/layout'
import { Layout }                from '@atls-ui-parts/layout'

import { Checkbox }              from '../src/checkbox.component.js'
import { checkboxShapes }        from '../src/index.js'
import { checkboxAppearances }   from '../src/index.js'
import { customBoxStyles }       from './styles.css.js'
import { customCheckStyles }     from './styles.css.js'
import { customContainerStyles } from './styles.css.js'
import { customLabelStyles }     from './styles.css.js'

const meta: Meta<CheckboxProps> = {
  title: 'Components/Checkbox',
  render: function Render(props) {
    const [{ checked, indeterminate }, updateArgs] = useArgs<CheckboxProps>()

    return (
      <Column fill alignItems='center'>
        <Layout flexBasis='40px' />
        <Checkbox
          {...props}
          checked={checked}
          indeterminate={indeterminate}
          onChange={(event) => {
            updateArgs({ checked: event.currentTarget.checked, indeterminate: false })
            props.onChange?.(event)
          }}
        />
        <Layout flexBasis='40px' />
      </Column>
    )
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      name: 'Checked',
      description: 'Is the checkbox checked',
      control: { type: 'boolean' },
    },
    indeterminate: {
      name: 'Indeterminate',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
    },
    appearance: {
      name: 'Appearance',
      description: 'Named appearance or a custom state matrix',
      control: { type: 'select' },
      options: Object.keys(checkboxAppearances),
    },
    shape: {
      name: 'Shape',
      description: 'Checkbox, mark, and label sizes',
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
    defaultChecked: true,
    labelPosition: 'start',
    shape: checkboxShapes.md,
    children: 'Checkbox Label',
  },
}

export const Custom: Story = {
  name: 'Кастомный',
  args: {
    defaultChecked: true,
    labelPosition: 'end',
    shape: checkboxShapes.md,
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
