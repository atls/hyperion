import React       from 'react'

import { Loading } from '../index'

export const ExampleProgress = ({ fill }) => <Loading fill={fill} />

export default {
  title: 'Progress',
  component: ExampleProgress,
  argTypes: {
    fill: { control: 'color' },
  },
}
