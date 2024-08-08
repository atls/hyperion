import { Meta }                      from '@storybook/react'

import React                         from 'react'

import { Layout }                    from '@atls-ui-parts/layout'

import { Switch as SwitchComponent } from './switch.component.js'

export default {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
} as Meta

export const Switch = ({ disabled, checked, onChange }) => (
  <Layout justifyContent='center'>
    <SwitchComponent disabled={disabled} checked={checked} onChange={onChange} />
  </Layout>
)

Switch.args = {
  disabled: false,
  checked: false,
  onChange: () => undefined,
}
