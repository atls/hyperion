import { Meta }        from '@storybook/react'
import { StoryObj }    from '@storybook/react'
import React           from 'react'

import { Column }      from '@atls-ui-parts/layout'
import { Layout }      from '@atls-ui-parts/layout'

import { Switch }      from './switch.component.js'
import { SwitchProps } from './switch.interfaces.js'

const meta: Meta<SwitchProps> = {
  title: 'Components/Switch',
  render: (props) => (
    <Column fill alignItems='center'>
      <Layout flexBasis='40px' />
      <Switch {...props} />
      <Layout flexBasis='40px' />
    </Column>
  ),
  tags: ['autodocs'],
}

export default meta

export const Base: StoryObj<SwitchProps> = {
  name: 'Базовый',
  args: {
    disabled: false,
    checked: false,
    onChange: () => undefined,
  },
}
