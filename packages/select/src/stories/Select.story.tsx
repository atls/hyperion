import React                        from 'react'
import { Option }                   from 'rc-select'

import { Select as TemplateSelect } from '..'

const Select = (props) => <TemplateSelect {...props} />

export const ExampleSelect = () => {
  return (
    <Select>
      <Option value='One'>One</Option>
      <Option value='Two'>Two</Option>
    </Select>
  )
}

export default {
  title: 'Select',
  component: ExampleSelect,
}
