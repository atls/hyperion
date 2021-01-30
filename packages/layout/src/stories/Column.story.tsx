import React      from 'react'

import { Column } from '../Layout'

export const ExampleColumn = ({ size, m, p }) => (
  <Column size={size} m={m} p={p}>
    <h1>Columned</h1>
  </Column>
)

export default {
  title: 'Layout',
  component: ExampleColumn,
  argTypes: {
    color: { control: 'none' },
    backgroundColor: { control: 'none' },
    size: { control: 'number' },
    m: { control: 'number' },
    p: { control: 'number' },
  },
}
