import React                           from 'react'

import { Layout }                      from '@atls-ui-parts/layout'

import { Divider as DividerComponent } from './divider.component'

export default {
  title: 'Components/Divider',
}

export const Divider = ({ rounding, weight, color }) => (
  <Layout width={1080}>
    <DividerComponent borderRadius={rounding} weight={weight} backgroundColor={color} />
  </Layout>
)

Divider.args = {
  rounding: 17,
  weight: 1,
  color: 'red',
}

Divider.argTypes = {
  rounding: {
    name: 'Rounding',
    description: 'Закругление',
    control: {
      type: 'number',
    },
  },
  weight: {
    name: 'Weight',
    description: 'Толщина',
    control: {
      type: 'number',
    },
  },
  color: {
    name: 'Color',
    description: 'Цвет',
    control: {
      type: 'color',
    },
  },
}
