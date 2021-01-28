import React   from 'react'

import { Row } from '../index'

export const ExampleRow = ({ size, m, p }) => (
  <Row size={size} m={m} p={p}>
    <h1>Rowed</h1>
  </Row>
)

export default {
  title: 'Layout',
  component: ExampleRow,
  argTypes: {
    color: { control: 'none' },
    backgroundColor: { control: 'none' },
    size: { control: 'number' },
    m: { control: 'number' },
    p: { control: 'number' },
  },
}
