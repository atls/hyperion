/* eslint-disable react-hooks/rules-of-hooks */

import { Meta }     from '@storybook/react'
import { StoryObj } from '@storybook/react'

import React        from 'react'
import { useState } from 'react'

import { Select }   from './select.component.js'

const meta: Meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
}

export default meta

export const Base: StoryObj = {
  name: 'Базовый',
  render: () => {
    const items = ['Item1', 'Item2', 'Item3']

    const [value, setValue] = useState('Item1')

    return (
      <Select
        label='Label'
        placeholder='value'
        value={value}
        items={items}
        onChangeValue={setValue}
      />
    )
  },
}
