import React      from 'react'
import { Option } from 'rc-select'

import { Select } from '..'

export const ExampleSelect = ({
  multiple,
  showSearch,
  invalid,
}: {
  multiple: boolean
  showSearch: boolean
  invalid: boolean
}) => {
  return (
    <Select
      multiple={multiple}
      showSearch={showSearch}
      invalid={invalid}
      fontFamily='Inter'
      fontWeight={600}
      fontSize='12px'
      minHeight='50px'
      width='100%'
      border='1px solid rgba(0, 0, 0, 0.08)'
      borderRadius='4px'
      backgroundColor='#ffffff'
      placeholder='Choose your option'
    >
      <Option value='One'>One</Option>
      <Option value='Two'>Two</Option>
    </Select>
  )
}

export default {
  title: 'Select',
  component: ExampleSelect,
}
