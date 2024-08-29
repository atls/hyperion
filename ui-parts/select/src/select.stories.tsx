/* eslint-disable react-hooks/rules-of-hooks */

import type { Meta }     from '@storybook/react'
import type { StoryObj } from '@storybook/react'

import { useState }      from 'react'
import React             from 'react'

import { Column }        from '@atls-ui-parts/layout'
import { Row }           from '@atls-ui-parts/layout'
import { Layout }        from '@atls-ui-parts/layout'

import { Select }        from './select.component.js'

const meta: Meta = {
  title: 'Components/Select',
  render: () => {
    const items = ['Item1', 'Item2', 'Item3']

    const [value, setValue] = useState<string>(items[0])

    return (
      <Column fill alignItems='center'>
        <Layout flexBasis='40px' />
        <Row justifyContent='center'>
          <Select
            label='Label'
            placeholder='value'
            value={value}
            items={items}
            onChangeValue={setValue}
          />
        </Row>
        <Layout flexBasis='40px' />
      </Column>
    )
  },
  tags: ['autodocs'],
}

export default meta

export const Base: StoryObj = {
  name: 'Базовый',
}
