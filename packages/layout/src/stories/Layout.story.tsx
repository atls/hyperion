import React                   from 'react'

import { Column, Layout, Row } from '../index'

export const ExampleLayout = ({
  color = '#fff',
  backgroundColor = '#000',
  size,
  m,
  p,
  colM,
  colP,
  rowM,
  rowP,
}) => (
  <Layout color={color} backgroundColor={backgroundColor} size={size} m={m} p={p}>
    <Column m={colM} p={colP}>
      <Row m={rowM} p={rowP}>
        Row 1
      </Row>
      <Row m={rowM} p={rowP}>
        Row 2
      </Row>
    </Column>
    <Column m={colM} p={colP}>
      <Row m={rowM} p={rowP}>
        Row 1
      </Row>
      <Row m={rowM} p={rowP}>
        Row 2
      </Row>
      <Row m={rowM} p={rowP}>
        Row 3
      </Row>
    </Column>
    <Column m={colM} p={colP}>
      <Row m={rowM} p={rowP}>
        Row 1
      </Row>
      <Row m={rowM} p={rowP}>
        Row 2
      </Row>
      <Row m={rowM} p={rowP}>
        Row 3
      </Row>
      <Row m={rowM} p={rowP}>
        Row 4
      </Row>
    </Column>
  </Layout>
)

export default {
  title: 'Layout',
  component: ExampleLayout,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    size: { control: 'number' },
    m: { control: 'number' },
    p: { control: 'number' },
    colM: { control: 'number' },
    colP: { control: 'number' },
    rowM: { control: 'number' },
    rowP: { control: 'number' },
  },
}
